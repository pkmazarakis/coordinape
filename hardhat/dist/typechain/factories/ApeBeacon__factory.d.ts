import { Signer, BytesLike, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ApeBeacon, ApeBeaconInterface } from "../ApeBeacon";
export declare class ApeBeacon__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_apeBeacon: string, _owner: string, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ApeBeacon>;
    getDeployTransaction(_apeBeacon: string, _owner: string, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ApeBeacon;
    connect(signer: Signer): ApeBeacon__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b5060405162000cc438038062000cc483398101604081905262000034916200053d565b82816200006360017fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d516200066c565b60008051602062000c5d833981519152146200008f57634e487b7160e01b600052600160045260246000fd5b6200009d8282600062000112565b50620000cd905060017fa7b53796fd2d99cb1f5ae019b54f9e024446c3d12b483f733ccc62ed04eb126b6200066c565b60008051602062000c7d83398151915214620000f957634e487b7160e01b600052600160045260246000fd5b5060008051602062000c7d8339815191525550620006d5565b6200011d83620001f7565b6040516001600160a01b038416907f1cf3b03a6cf19fa2baba4df148e9dcabedea7f8a5c07840e207e5c089be95d3e90600090a26000825111806200015f5750805b15620001f257620001f0836001600160a01b0316635c60da1b6040518163ffffffff1660e01b815260040160206040518083038186803b158015620001a357600080fd5b505afa158015620001b8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001de919062000520565b83620003a860201b620001de1760201c565b505b505050565b6200020d81620003d760201b6200020a1760201c565b6200026d5760405162461bcd60e51b815260206004820152602560248201527f455243313936373a206e657720626561636f6e206973206e6f74206120636f6e6044820152641d1c9858dd60da1b60648201526084015b60405180910390fd5b620002f7816001600160a01b0316635c60da1b6040518163ffffffff1660e01b815260040160206040518083038186803b158015620002ab57600080fd5b505afa158015620002c0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620002e6919062000520565b620003d760201b6200020a1760201c565b6200035e5760405162461bcd60e51b815260206004820152603060248201527f455243313936373a20626561636f6e20696d706c656d656e746174696f6e206960448201526f1cc81b9bdd08184818dbdb9d1c9858dd60821b606482015260840162000264565b806200038760008051602062000c5d83398151915260001b620003e160201b620002101760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b6060620003d0838360405180606001604052806027815260200162000c9d60279139620003e4565b9392505050565b803b15155b919050565b90565b6060620003f184620003d7565b6200044e5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b606482015260840162000264565b600080856001600160a01b0316856040516200046b919062000619565b600060405180830381855af49150503d8060008114620004a8576040519150601f19603f3d011682016040523d82523d6000602084013e620004ad565b606091505b509092509050620004c0828286620004ca565b9695505050505050565b60608315620004db575081620003d0565b825115620004ec5782518084602001fd5b8160405162461bcd60e51b815260040162000264919062000637565b80516001600160a01b0381168114620003dc57600080fd5b60006020828403121562000532578081fd5b620003d08262000508565b60008060006060848603121562000552578182fd5b6200055d8462000508565b92506200056d6020850162000508565b60408501519092506001600160401b03808211156200058a578283fd5b818601915086601f8301126200059e578283fd5b815181811115620005b357620005b3620006bf565b604051601f8201601f19908116603f01168101908382118183101715620005de57620005de620006bf565b81604052828152896020848701011115620005f7578586fd5b6200060a83602083016020880162000690565b80955050505050509250925092565b600082516200062d81846020870162000690565b9190910192915050565b60006020825282518060208401526200065881604085016020870162000690565b601f01601f19169190910160400192915050565b6000828210156200068b57634e487b7160e01b81526011600452602481fd5b500390565b60005b83811015620006ad57818101518382015260200162000693565b83811115620001f05750506000910152565b634e487b7160e01b600052604160045260246000fd5b61057880620006e56000396000f3fe6080604052600436106100385760003560e01c8063025313a21461004f578063bf8cab431461007a578063f1739cae1461009a57610047565b36610047576100456100ba565b005b6100456100ba565b34801561005b57600080fd5b506100646100cc565b604051610071919061046c565b60405180910390f35b34801561008657600080fd5b50610045610095366004610438565b6100df565b3480156100a657600080fd5b506100456100b5366004610400565b61016e565b6100ca6100c5610213565b610292565b565b6000805160206104fc8339815191525490565b6100e76100cc565b6001600160a01b0316336001600160a01b03161461010457600080fd5b61010c6102b6565b6001600160a01b03166329e84949826040518263ffffffff1660e01b815260040161013991815260200190565b600060405180830381600087803b15801561015357600080fd5b505af1158015610167573d6000803e3d6000fd5b5050505050565b6101766100cc565b6001600160a01b0316336001600160a01b03161461019357600080fd5b806000805160206104fc833981519152557fc9c890d47f12a6629d03fbfa332f5be9e2ae8310dfc4421ac03a7a9082e24aae816040516101d3919061046c565b60405180910390a150565b6060610203838360405180606001604052806027815260200161051c602791396102c0565b9392505050565b3b151590565b90565b600061021d610399565b6001600160a01b0316635c60da1b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561025557600080fd5b505afa158015610269573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061028d919061041c565b905090565b3660008037600080366000845af43d6000803e8080156102b1573d6000f35b3d6000fd5b600061028d610399565b6060833b6103245760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084015b60405180910390fd5b600080856001600160a01b03168560405161033f9190610450565b600060405180830381855af49150503d806000811461037a576040519150601f19603f3d011682016040523d82523d6000602084013e61037f565b606091505b509150915061038f8282866103c7565b9695505050505050565b7fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d50546001600160a01b031690565b606083156103d6575081610203565b8251156103e65782518084602001fd5b8160405162461bcd60e51b815260040161031b9190610480565b600060208284031215610411578081fd5b8135610203816104e3565b60006020828403121561042d578081fd5b8151610203816104e3565b600060208284031215610449578081fd5b5035919050565b600082516104628184602087016104b3565b9190910192915050565b6001600160a01b0391909116815260200190565b600060208252825180602084015261049f8160408501602087016104b3565b601f01601f19169190910160400192915050565b60005b838110156104ce5781810151838201526020016104b6565b838111156104dd576000848401525b50505050565b6001600160a01b03811681146104f857600080fd5b5056fea7b53796fd2d99cb1f5ae019b54f9e024446c3d12b483f733ccc62ed04eb126a416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a264697066735822122086aa3600cd8fa4d0afb3e10173faf1e9ed33b6dc17a9c1c11c0692cb7dc476d864736f6c63430008020033a3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d50a7b53796fd2d99cb1f5ae019b54f9e024446c3d12b483f733ccc62ed04eb126a416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        stateMutability: string;
        type: string;
        inputs?: undefined;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): ApeBeaconInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ApeBeacon;
}
