
var contracts = contracts || {};

function makeContracts() {
    var contractData = {
    "AuditDog": {
        "code": "0x6060604052610c0f806100136000396000f3006060604052361561007f576000357c0100000000000000000000000000000000000000000000000000000000900480634e1243b614610081578063679752131461010b578063913d54d51461022b578063bb3d5af2146102ff578063c9a43b2b14610320578063d1ab0457146103eb578063e5393f25146104ae5761007f565b005b6100ef6004803590602001803590602001906004018035906020019191908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505090803590602001803590602001803590602001803590602001506108af565b604051808263ffffffff16815260200191505060405180910390f35b61020f6004803590602001906004018035906020019191908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505090803590602001906004018035906020019191908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505090803590602001803590602001803590602001803590602001906004018035906020019191908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509080359060200180359060200180359060200180359060200150610bd2565b604051808263ffffffff16815260200191505060405180910390f35b61023c600480359060200150610533565b604051808973ffffffffffffffffffffffffffffffffffffffff1681526020018863ffffffff168152602001806020018781526020018681526020018573ffffffffffffffffffffffffffffffffffffffff1681526020018463ffffffff16815260200183815260200182810382528881815481526020019150805480156102e957820191906000526020600020905b8154815290600101906020018083116102cc57829003601f168201915b5050995050505050505050505060405180910390f35b61030a6004506105f5565b6040518082815260200191505060405180910390f35b6103316004803590602001506104e1565b604051808060200180602001868152602001858152602001848152602001838103835288818154815260200191508054801561039257820191906000526020600020905b81548152906001019060200180831161037557829003601f168201915b505083810382528781815481526020019150805480156103d757820191906000526020600020905b8154815290600101906020018083116103ba57829003601f168201915b505097505050505050505060405180910390f35b6104926004803590602001906004018035906020019191908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505090803590602001906004018035906020019191908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509080359060200180359060200180359060200150610607565b604051808263ffffffff16815260200191505060405180910390f35b6104b96004506104cf565b6040518082815260200191505060405180910390f35b600060006000505490506104de565b90565b6000600050818154811015610002579060005260206000209060050201600091509050806000016000509080600101600050908060020160005054908060030160005054908060040160005054905085565b60016000508181548110156100025790600052602060002090600602016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060000160149054906101000a900463ffffffff169080600101600050908060020160005054908060030160005054908060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060040160149054906101000a900463ffffffff16908060050160005054905088565b60006001600050549050610604565b90565b6000600060006000600050549150600160006000508181540191508181548183558181151161071c5760050281600502836000526020600020918201910161071b919061064f565b8082111561071757600060008201600050805460008255601f0160209004906000526020600020908101906106a29190610684565b8082111561069e5760008181506000905550600101610684565b5090565b5060018201600050805460008255601f0160209004906000526020600020908101906106ec91906106ce565b808211156106e857600081815060009055506001016106ce565b5090565b506002820160005060009055600382016000506000905560048201600050600090555060010161064f565b5090565b5b50505050600060005082815481101561000257906000526020600020906005020160005090508781600001600050908051906020019082805482825590600052602060002090601f01602090048101928215610795579182015b82811115610794578251826000505591602001919060010190610776565b5b5090506107c091906107a2565b808211156107bc57600081815060009055506001016107a2565b5090565b50508681600101600050908051906020019082805482825590600052602060002090601f01602090048101928215610815579182015b828111156108145782518260005055916020019190600101906107f6565b5b5090506108409190610822565b8082111561083c5760008181506000905550600101610822565b5090565b50508581600201600050819055508481600301600050819055508381600401600050819055508163ffffffff167f92fb2fc493a102c962cf806f64149fd941df1c577f7fdeb006ec2752e19eb66d60405180905060405180910390a28192506108a4565b505095945050505050565b6000600060006000600050548963ffffffff161015156108ce57610bc6565b60016000505491506001600160005081815401915081815481835581811511610a0f57600602816006028360005260206000209182019101610a0e9190610910565b80821115610a0a5760006000820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556000820160146101000a81549063ffffffff021916905560018201600050805460008255601f0160209004906000526020600020908101906109a19190610983565b8082111561099d5760008181506000905550600101610983565b5090565b50600282016000506000905560038201600050600090556004820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556004820160146101000a81549063ffffffff0219169055600582016000506000905550600101610910565b5090565b5b5050505060016000508281548110156100025790600052602060002090600602016000509050338160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff02191690830217905550888160000160146101000a81548163ffffffff021916908302179055508781600101600050908051906020019082805482825590600052602060002090601f01602090048101928215610ad2579182015b82811115610ad1578251826000505591602001919060010190610ab3565b5b509050610afd9190610adf565b80821115610af95760008181506000905550600101610adf565b5090565b5050868160020160005081905550858160030160005081905550848160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff02191690830217905550838160040160146101000a81548163ffffffff021916908302179055504381600501600050819055508060000160149054906101000a900463ffffffff1663ffffffff168263ffffffff167fd4e84a8cbb361425ff0404ab684a00c1251df818fb4c3744a16c8db847d8f71a60405180905060405180910390a3819250610bc6565b50509695505050505050565b600060006000610be58d8d8d8d8d610607565b9150610bf58289898989896108af565b9050809250610bff565b50509a995050505050505050505056",
        "info": {
            "abiDefinition": [
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "sw_ix",
                            "type": "uint32"
                        },
                        {
                            "name": "claim",
                            "type": "string"
                        },
                        {
                            "name": "claim_hash",
                            "type": "bytes32"
                        },
                        {
                            "name": "claim_hash_type",
                            "type": "bytes32"
                        },
                        {
                            "name": "claim_ref_adog",
                            "type": "address"
                        },
                        {
                            "name": "claim_ref_ix",
                            "type": "uint32"
                        }
                    ],
                    "name": "AddClaim",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint32"
                        }
                    ],
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "name",
                            "type": "string"
                        },
                        {
                            "name": "git_repo",
                            "type": "string"
                        },
                        {
                            "name": "git_commit",
                            "type": "bytes32"
                        },
                        {
                            "name": "extra_auth",
                            "type": "bytes32"
                        },
                        {
                            "name": "extra_auth_type",
                            "type": "bytes32"
                        },
                        {
                            "name": "claim",
                            "type": "string"
                        },
                        {
                            "name": "claim_hash",
                            "type": "bytes32"
                        },
                        {
                            "name": "claim_hash_type",
                            "type": "bytes32"
                        },
                        {
                            "name": "claim_ref_adog",
                            "type": "address"
                        },
                        {
                            "name": "claim_ref_ix",
                            "type": "uint32"
                        }
                    ],
                    "name": "AddSWAndClaim",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint32"
                        }
                    ],
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "name": "m_claims",
                    "outputs": [
                        {
                            "name": "author",
                            "type": "address"
                        },
                        {
                            "name": "sw_ix",
                            "type": "uint32"
                        },
                        {
                            "name": "claim",
                            "type": "string"
                        },
                        {
                            "name": "claim_hash",
                            "type": "bytes32"
                        },
                        {
                            "name": "claim_hash_type",
                            "type": "bytes32"
                        },
                        {
                            "name": "claim_ref_adog",
                            "type": "address"
                        },
                        {
                            "name": "claim_ref_ix",
                            "type": "uint32"
                        },
                        {
                            "name": "bl_created",
                            "type": "uint256"
                        }
                    ],
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [],
                    "name": "GetClaimCount",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "name": "m_software",
                    "outputs": [
                        {
                            "name": "name",
                            "type": "string"
                        },
                        {
                            "name": "git_repo",
                            "type": "string"
                        },
                        {
                            "name": "git_commit",
                            "type": "bytes32"
                        },
                        {
                            "name": "extra_auth",
                            "type": "bytes32"
                        },
                        {
                            "name": "extra_auth_type",
                            "type": "bytes32"
                        }
                    ],
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "name",
                            "type": "string"
                        },
                        {
                            "name": "git_repo",
                            "type": "string"
                        },
                        {
                            "name": "git_commit",
                            "type": "bytes32"
                        },
                        {
                            "name": "extra_auth",
                            "type": "bytes32"
                        },
                        {
                            "name": "extra_auth_type",
                            "type": "bytes32"
                        }
                    ],
                    "name": "AddSoftware",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint32"
                        }
                    ],
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [],
                    "name": "GetSoftwareCount",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "type": "function"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "id",
                            "type": "uint256"
                        }
                    ],
                    "name": "OnNewSoftware",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "claim_id",
                            "type": "uint256"
                        },
                        {
                            "indexed": true,
                            "name": "sw_id",
                            "type": "uint256"
                        }
                    ],
                    "name": "OnNewClaimForSw",
                    "type": "event"
                }
            ],
            "compilerVersion": "0.1.1-ed7a8a35",
            "developerDoc": {
                "methods": {}
            },
            "language": "Solidity",
            "languageVersion": "0",
            "source": "contract AuditDog {\n\t/*\n\tbytes HASH_SHA3 = \"sha3\";\n\tbytes HASH_GIT_COMMIT = \"gitcommit\";\n\tbytes HASH_SHA256 = \"sha256\";\n\n\t// when I'm the owner of the previous claim\n\tbytes CLAIM_DELETE_REF = \"delete ref\";\n\n\t// when I disagree with another claim\n\tbytes CLAIM_DISPUTE_REF = \"dispute ref\";\n\n\t// when I want to +1 another claim\n\tbytes CLAIM_CONFIRM_REF = \"confirm ref\";\n\n\t// when I want to modify or comment on my previous claim\n\tbytes CLAIM_AMEND_REF = \"amend ref\";\n\t*/\n\n\n\t// A claim someone has made about the security of a particular software\n\t// package.\n\tstruct Claim {\n\t\t// address of the person who created this claim\n\t\taddress author;\n\n\t\t// identifier of the software package the claim is about\n\t\tuint32 sw_ix;\n\n\t\t// It can be one of predefined CLAIM_ constants\n\t\t// or an URL\n\t\t// or just plain text\n\t\tstring claim;\n\t\t\n\t\t// the rawbytes hash of the contents of the claim_url\n\t\tbytes32 claim_hash;\n\n\t\t// how to interpret the claim_hash, see one of HASH_ values\n\t\tbytes32 claim_hash_type;\n\n\t\t// it's possible to reference another claim, for example to say\n\t\t// that it's invalid. The claim may be present in a previous version\n\t\t// of the AuditDog contract.\n\t\taddress claim_ref_adog;\n\n\t\t// just the index of the referenced claim\n\t\tuint32 claim_ref_ix;\n\n\t\t// the block number when this claim was created, for use in other contracts\n\t\tuint bl_created;\n\t}\n\n\t// A unique identifier of a software package and its version present\n\t// somewhere on the internet.\n\tstruct Software {\n\t\t// a human readable value\n\t\tstring name;\n\n\t\t// url\n\t\tstring git_repo;\n\n\t\t// the git commit hash in raw bytes (exactly the same hexnumber as seen in git log)\n\t\tbytes32 git_commit;\n\n\t\t// an optional additional HMAC or something\n\t\tbytes32 extra_auth;\n\n\t\t// see one of HASH_ predefined values\n\t\tbytes32 extra_auth_type;\n\t}\n\n\tevent OnNewSoftware(uint indexed id);\n\tevent OnNewClaimForSw(uint indexed claim_id, uint indexed sw_id);\n\n\t// TODO: add events, when new claim added, or new claim for a software is added\n\n\tSoftware[] public m_software;\n\tClaim[] public m_claims;\n\n\tfunction GetSoftwareCount() public returns (uint) {\n\t\treturn m_software.length;\n\t}\n\n\tfunction GetClaimCount() public returns (uint) {\n\t\treturn m_claims.length;\n\t}\n\n\tfunction AddSoftware(string name, string git_repo, bytes32 git_commit, bytes32 extra_auth, bytes32 extra_auth_type) returns (uint32) {\n\t\tuint32 sw_ix = uint32(m_software.length);\n\t\tm_software.length += 1;\n\t\tSoftware item = m_software[sw_ix];\n\n\t\titem.name = name;\n\t\titem.git_repo = git_repo;\n\t\titem.git_commit = git_commit;\n\t\titem.extra_auth = extra_auth;\n\t\titem.extra_auth_type = extra_auth_type;\n\n\t\tOnNewSoftware(sw_ix);\n\t\treturn sw_ix;\n\t}\n\n\tfunction AddClaim(uint32 sw_ix, string claim, bytes32 claim_hash, bytes32 claim_hash_type, address claim_ref_adog, uint32 claim_ref_ix) returns (uint32) {\n\t\tif (sw_ix >= m_software.length) return;\n\n\t\tuint32 cl_ix = uint32(m_claims.length);\n\t\tm_claims.length += 1;\n\t\tClaim item = m_claims[cl_ix];\n\t\titem.author = msg.sender;\n\t\titem.sw_ix = sw_ix;\n\t\titem.claim = claim;\n\t\titem.claim_hash = claim_hash;\n\t\titem.claim_hash_type = claim_hash_type;\n\t\titem.claim_ref_adog = claim_ref_adog;\n\t\titem.claim_ref_ix = claim_ref_ix;\n\t\titem.bl_created = block.number;\n\n\t\tOnNewClaimForSw(cl_ix, item.sw_ix);\n\t\treturn cl_ix;\n\t}\n\n\tfunction AddSWAndClaim(string name, string git_repo, bytes32 git_commit, bytes32 extra_auth, bytes32 extra_auth_type,\n\t\t\t\t\t\t   string claim, bytes32 claim_hash, bytes32 claim_hash_type, address claim_ref_adog, uint32 claim_ref_ix)\n\t\t\t\t\t\t   returns (uint32) {\n\t\tuint32 sw_ix = AddSoftware(name, git_repo, git_commit, extra_auth, extra_auth_type);\n\t\tuint32 cl_ix = AddClaim(sw_ix, claim, claim_hash, claim_hash_type, claim_ref_adog, claim_ref_ix);\n\t\treturn cl_ix;\n    }\n\n\t// TODO: search by other stuff\n\t// TODO: search by author, somehow\n\t\t/*\n\tfunction SearchByGit(bytes git_repo) returns (uint) {\n\t\tfor (uint i = 0; i < m_software.length; i++) {\n\t\t\tif (m_software[i].git_repo == git_repo) return i;\n\t\t}\n\t\treturn 0;\n\t}\n\t\t*/\n}\n\n/*\ncontract AuditDogAbi {\n\tfunction m_software(uint ix) constant public returns (bytes, bytes, bytes32, bytes32, bytes32);\n}\n\ncontract Tester {\n\t// TODO: test that all data is available from other contracts\n\n\tfunction run(address addr) returns (bytes) {\n\t\tAuditDogAbi dog = AuditDogAbi(addr);\n\t\t//var s = dog.m_software(0);\n\t\tvar r = complex();\n\t}\n\n\tfunction complex() constant returns (int32 r, int32 i, bytes z) {\n\t\ti = 4;\n\t\tr = 89;\n\t\tz = \"bcd\";\n\t}\n}\n*/\n",
            "userDoc": {
                "methods": {}
            }
        }
    }
};
    var contractNames = Object.keys(contractData);
    for (var i=0; i < contractNames.length; i++) {
        var contractName = contractNames[i];
        contracts[contractName] = web3.eth.contract(contractData[contractName].info.abiDefinition);
    }
};
makeContracts();
