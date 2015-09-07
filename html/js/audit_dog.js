function NoConv() {

}

NoConv.prototype.to_eth = function(x) { return x; }
NoConv.prototype.from_eth = function(x) { return x; }

function HashConv(type) {
	this.type_ = type;
}

HashConv.prototype.to_eth = function(x) {
	if (this.type_ == 'bytes32') {
		if (x == '') return null;
		if (x.startsWith('0x')) return x;
		return '0x' + x;
	} else {
		throw 'Unknown internal type.';
	}
}

HashConv.prototype.from_eth = function(x) {
	if (this.type_ == 'bytes32') {
		return x.substr(2);

	} else {
		throw 'Unknown internal type.';
	}
}

function StrConv(type) {
	this.type_ = type;
}

StrConv.prototype.to_eth = function(x) {
	return web3.toHex(x);
}

StrConv.prototype.from_eth = function(x) {
	return web3.toAscii(x);
}

function NamingConv(dct) {
	this.dct = dct;
}

NamingConv.prototype.to_eth = function(x) { return x; }

NamingConv.prototype.from_eth = function(x) {
	return this.dct[x] || x;
}


// in absence of a GlobalRegistrar...
var Authors = {
	'0x1b3cea9cc8840e158f3beb20f11c16b9514555f1': 'Quiark http://rplasil.name',
	'0xd8af2b63c5017a5542d6fbbac21f48495c8d3017': 'Quiark http://rplasil.name'
};

var SwFields = [
	{id: 'name', desc: 'Package Name', caption: 'SW name'},
	{id: 'git_repo', desc: 'SCM Repo of source code', caption: 'Git Repo'},
	{id: 'git_commit', desc: 'git commit or contract address', caption: 'Commit or Address', conv: new HashConv('bytes32')},
	{id: 'extra_auth', desc: 'Alternative hash of source code', caption: 'Extra Auth', conv: new HashConv('bytes32')},
	{id: 'extra_auth_type', desc: 'Alternative hash type', caption: 'EAuth Type', conv: new StrConv('bytes32')}
];

var ClaimFields = [
	{id: 'author', desc: 'Address of claim author', noinput: true, caption: 'Author Addr', conv: new NamingConv(Authors)},
	{id: 'sw_ix', desc: 'Identifier of SW package', caption: 'SW ID'},
	{id: 'claim', desc: 'Claim text or URL', caption: 'Claim'},
	{id: 'claim_hash', desc: 'Hash of claim contents', caption: 'Claim Hash', conv: new HashConv('bytes32')},
	{id: 'claim_hash_type', desc: 'Type of hash used for claim contents auth', caption: 'Hash Type', conv: new StrConv('bytes32')},
	{id: 'claim_ref_adog', desc: 'AuditDog contract where referenced claim exists', caption: 'Ref DB', conv: new HashConv('bytes32')},
	{id: 'claim_ref_ix', desc: 'The ID of referenced claim', caption: 'Ref ID'},
	{id: 'bl_created', desc: 'Block number when claim was created', noinput: true, caption: 'Created Blck'}
];


var GAS_ADD_SW = 500000;
var GAS_ADD_CLAIM = 600000;


var AuditDog = null;
var Software = [];
var Claims = [];

function Flash(msg) {
	var $flash = $('#flash');
	$flash.text(msg)
		.addClass('flash-visible');

	setTimeout(function() {
		$flash.removeClass('flash-visible');
	}, 5000);
}

function Tuple2Obj(tuple, fields) {
	var obj = {};
	for (var i = 0; i < fields.length; i++) {
		obj[fields[i].id] = tuple[i];
	}
	return obj;
}

function TableHeader($table, fields) {
	if ($('thead', $table).length > 0) return;

	var $th = $('<thead/>');
	var $th_tr = $('<tr/>');
	$th_tr.appendTo($th);
	$th.appendTo($table);

	$th_tr.append($('<td/>').text('index'));
	for (var i = 0; i < fields.length; i ++) {
		$th_tr.append($('<td/>').text(fields[i].caption));
	}
}

function TableRow($row, tuple, ix, fields) {
	$row.append($('<td/>').text(ix));
	for (var i = 0; i < tuple.length; i++) {
		var field = fields[i];
		var conv = field.conv || new NoConv();
		$row.append($('<td/>')
				.attr('col', i)
				.text( conv.from_eth(tuple[i]) ));
	}
}

function LoadTable(src, table_id, fields, dest, cnt, short_type) {
	var batch = web3.createBatch();
	var $table = $('table#' + table_id);
	TableHeader($table, fields);

	for (var i = 0; i < cnt; i++) {
		(function(ix) {
			batch.add(src.request(ix, function(error, result) {
				if (error) return;
				dest[ix] = result;

				var $row = $('tr[ix='+ix+']', $table);
				if ($row.length == 0) {
					$row = $('<tr/>')
						.attr('ix', ix)
						.attr('id', short_type + '-' + ix);
					$table.append($row);
				}
				$row.empty();
				TableRow($row, result, ix, fields);
			}));
		})(i);
	}


	batch.execute();
}

function SubmitForm($form, fields, gas, send_fn) {
	try {
		var data = [];
		var $grp = $('.form-group', $form);
		for (var i = 0; i < fields.length; i++) {
			var field = fields[i];
			if (field.noinput) continue;
			var conv = field.conv || new NoConv();
			var $input = $('#' + field.id);
			data.push(conv.to_eth($input.val()));
		}
		console.log(data);

		data.push({gas: gas});
		var tx = send_fn.sendTransaction.apply(null, data);
		console.log('web3.eth.getTransactionReceipt("'+ tx + '")');
		Flash('Sent! tx=' + tx);
	} catch (err) {
		Flash('Error: ' + err);
	}
}

function MakeFormRow($parent, caption, id, desc) {
	var $res = $('<div/>').addClass('input-group');
	$res.append( $('<span/>').addClass('input-group-addon').text(caption) );
	$res.append( $('<input/>').addClass('form-control')
			.attr('type', 'text')
			.attr('id', id)
			.attr('placeholder', desc)
	);
	$parent.append($res);
}

function MakeForm($parent, fields) {
	var $grp = $('.form-group', $parent);
	for (var i = 0; i < fields.length; i++) {
		var field = fields[i];
		if (field.noinput) continue;
		MakeFormRow($grp, field.caption, field.id, field.desc);
	}
}

function LoadAccounts() {
	var $drop = $('#accounts');
	for (var i = 0; i < web3.eth.accounts.length; i++) {
		var $li = $('<li/>');
		var $item = $('<a/>')
			.attr('href', '#accounts')
			.text(web3.eth.accounts[i]);
		$item.appendTo($li);
		$li.appendTo($drop);
	}

	$drop.on('click', 'a', function(evt) {
		var $target = $(evt.target);
		var addr = $target.text();
		web3.eth.defaultAccount = addr;
	});
}

function Reload() {
	var DEV = false;

	var RpcHost = $('#iRpcHost').val();
	var RpcPort = $('#iRpcPort').val();
	web3.setProvider(new web3.providers.HttpProvider('http://' + RpcHost + ':' + RpcPort));

	if (web3.eth.defaultAccount == null) web3.eth.defaultAccount = web3.eth.accounts[0];

	Software = [];
	Claims = [];

	var  addr = '0x710690d588c6782c8af2e06dd1a5748ca6ba02ae';
	if (DEV) {
		 addr = web3.eth.getTransactionReceipt(contractDeployment['AuditDog'].tx).contractAddress;
	}
	AuditDog = contracts['AuditDog'].at(addr);
	console.log('contract addr', addr);


	if (DEV && (AuditDog.GetSoftwareCount.call().toFixed() == 0)) {

		// create some testing data
		AuditDog.AddSoftware.sendTransaction('git', 'git.linux.org', '0xabcd', '', '', {from: web3.eth.accounts[0], gas: GAS_ADD_SW});
		AuditDog.AddSoftware.sendTransaction('hg', 'git.linux.org', '0xabcd', '', '', {from: web3.eth.accounts[0], gas: GAS_ADD_SW});
		AuditDog.AddSoftware.sendTransaction('mozilla', 'git.linux.org', '0xabcd', '', '', {from: web3.eth.accounts[0], gas: GAS_ADD_SW});
		AuditDog.AddSoftware.sendTransaction('windows', 'git.linux.org', '0xabcd', '', '', {from: web3.eth.accounts[0], gas: GAS_ADD_SW});

		AuditDog.AddClaim.sendTransaction(0, 'is safe', '0xBBBBBABB', '', '', 0, {from: web3.eth.accounts[0], gas: GAS_ADD_CLAIM});
		AuditDog.AddClaim.sendTransaction(1, 'is in Python', '', 'hulla hula', '', 0, {from: web3.eth.accounts[0], gas: GAS_ADD_CLAIM});
		AuditDog.AddClaim.sendTransaction(1, 'is big', '', '', '', 0, {from: web3.eth.accounts[0], gas: GAS_ADD_CLAIM});
		AuditDog.AddClaim.sendTransaction(2, 'I dont know', 'blabla', '', '', 0, {from: web3.eth.accounts[0], gas: GAS_ADD_CLAIM});
		AuditDog.AddClaim.sendTransaction(3, 'is a horrible nightmare', '', 'derp', '', 0, {from: web3.eth.accounts[0], gas: GAS_ADD_CLAIM});
	}


	LoadTable(AuditDog.m_software, 'software', SwFields, Software, AuditDog.GetSoftwareCount.call().toFixed(), 'sw');
	LoadTable(AuditDog.m_claims, 'claims', ClaimFields, Claims, AuditDog.GetClaimCount.call().toFixed(), 'cl');

	LoadAccounts();
}


MakeForm($('#frmSoftware'), SwFields);
MakeForm($('#frmClaim'), ClaimFields);


$('#bSubmitSw').click(function(evt) {
	SubmitForm($(evt.target).parent(), SwFields, GAS_ADD_SW, AuditDog.AddSoftware);
});
$('#bSubmitClaim').click(function(evt) {
	SubmitForm($(evt.target).parent(), ClaimFields, GAS_ADD_CLAIM, AuditDog.AddClaim);
});

$('#bReload').click(Reload);
Reload();

$('table.listing').on('click', 'td', function(evt) {
	var col = $(evt.target).attr('col');
	var $table = $(evt.target).closest('table');
	$('td[col=' + col + ']', $table).toggleClass('unfolded');
});

/*
$('table.listing').on('mouseleave', 'td', function(evt) {
	$('table.listing td').removeClass('unfolded');
});
*/
