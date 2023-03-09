/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface BankInterface extends utils.Interface {
  functions: {
    "allBills(uint256)": FunctionFragment;
    "beforeDueDate(uint256)": FunctionFragment;
    "cashBill(uint256)": FunctionFragment;
    "completeBill(uint256)": FunctionFragment;
    "discountRate()": FunctionFragment;
    "dishonoredAddresses(uint256)": FunctionFragment;
    "getAmountToCashBill(uint256)": FunctionFragment;
    "getAmountToPayBill(uint256)": FunctionFragment;
    "getBalance()": FunctionFragment;
    "getNumberOfBills()": FunctionFragment;
    "getNumberOfDishonoredAddresses()": FunctionFragment;
    "interestRate()": FunctionFragment;
    "issueBill(uint256,address)": FunctionFragment;
    "lockToken(uint256)": FunctionFragment;
    "term()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "allBills"
      | "beforeDueDate"
      | "cashBill"
      | "completeBill"
      | "discountRate"
      | "dishonoredAddresses"
      | "getAmountToCashBill"
      | "getAmountToPayBill"
      | "getBalance"
      | "getNumberOfBills"
      | "getNumberOfDishonoredAddresses"
      | "interestRate"
      | "issueBill"
      | "lockToken"
      | "term"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "allBills",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "beforeDueDate",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "cashBill",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "completeBill",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "discountRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "dishonoredAddresses",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAmountToCashBill",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAmountToPayBill",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getNumberOfBills",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getNumberOfDishonoredAddresses",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "interestRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "issueBill",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "lockToken",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "term", values?: undefined): string;

  decodeFunctionResult(functionFragment: "allBills", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "beforeDueDate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "cashBill", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "completeBill",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "discountRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "dishonoredAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAmountToCashBill",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAmountToPayBill",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getBalance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getNumberOfBills",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNumberOfDishonoredAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "interestRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "issueBill", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lockToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "term", data: BytesLike): Result;

  events: {};
}

export interface Bank extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BankInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    allBills(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, string, string, number] & {
        id: BigNumber;
        amount: BigNumber;
        timestamp: BigNumber;
        issuer: string;
        recipient: string;
        status: number;
      }
    >;

    beforeDueDate(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    cashBill(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    completeBill(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    discountRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    dishonoredAddresses(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getAmountToCashBill(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getAmountToPayBill(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    getNumberOfBills(overrides?: CallOverrides): Promise<[BigNumber]>;

    getNumberOfDishonoredAddresses(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    interestRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    issueBill(
      _amount: PromiseOrValue<BigNumberish>,
      _recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    lockToken(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    term(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  allBills(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, string, string, number] & {
      id: BigNumber;
      amount: BigNumber;
      timestamp: BigNumber;
      issuer: string;
      recipient: string;
      status: number;
    }
  >;

  beforeDueDate(
    _id: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  cashBill(
    _id: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  completeBill(
    _id: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  discountRate(overrides?: CallOverrides): Promise<BigNumber>;

  dishonoredAddresses(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getAmountToCashBill(
    _id: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getAmountToPayBill(
    _id: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getBalance(overrides?: CallOverrides): Promise<BigNumber>;

  getNumberOfBills(overrides?: CallOverrides): Promise<BigNumber>;

  getNumberOfDishonoredAddresses(overrides?: CallOverrides): Promise<BigNumber>;

  interestRate(overrides?: CallOverrides): Promise<BigNumber>;

  issueBill(
    _amount: PromiseOrValue<BigNumberish>,
    _recipient: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  lockToken(
    _id: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  term(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    allBills(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, string, string, number] & {
        id: BigNumber;
        amount: BigNumber;
        timestamp: BigNumber;
        issuer: string;
        recipient: string;
        status: number;
      }
    >;

    beforeDueDate(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    cashBill(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    completeBill(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    discountRate(overrides?: CallOverrides): Promise<BigNumber>;

    dishonoredAddresses(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getAmountToCashBill(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAmountToPayBill(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBalance(overrides?: CallOverrides): Promise<BigNumber>;

    getNumberOfBills(overrides?: CallOverrides): Promise<BigNumber>;

    getNumberOfDishonoredAddresses(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    interestRate(overrides?: CallOverrides): Promise<BigNumber>;

    issueBill(
      _amount: PromiseOrValue<BigNumberish>,
      _recipient: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    lockToken(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    term(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    allBills(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    beforeDueDate(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    cashBill(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    completeBill(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    discountRate(overrides?: CallOverrides): Promise<BigNumber>;

    dishonoredAddresses(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAmountToCashBill(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAmountToPayBill(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBalance(overrides?: CallOverrides): Promise<BigNumber>;

    getNumberOfBills(overrides?: CallOverrides): Promise<BigNumber>;

    getNumberOfDishonoredAddresses(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    interestRate(overrides?: CallOverrides): Promise<BigNumber>;

    issueBill(
      _amount: PromiseOrValue<BigNumberish>,
      _recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    lockToken(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    term(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    allBills(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    beforeDueDate(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    cashBill(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    completeBill(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    discountRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    dishonoredAddresses(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAmountToCashBill(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAmountToPayBill(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getNumberOfBills(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getNumberOfDishonoredAddresses(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    interestRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    issueBill(
      _amount: PromiseOrValue<BigNumberish>,
      _recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    lockToken(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    term(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}