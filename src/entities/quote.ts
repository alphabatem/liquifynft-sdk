import {Route} from "./route";

export class QuoteRequest {
	public readonly id: string

	public readonly inputMint: string

	public readonly outputMint: string

	public readonly swapMode: number

	public readonly slippage: number

	public readonly referralFee: number

	public readonly referralFeeTarget: string

	public readonly userPublicKey: string

	constructor(id: string, inputMint: string, outputMint: string, swapMode: number, slippage: number, userPublicKey: string, referralFee: number = 0, referralFeeTarget: string = "") {
		this.id = id
		this.inputMint = inputMint
		this.outputMint = outputMint
		this.swapMode = swapMode
		this.slippage = slippage
		this.referralFee = referralFee
		this.referralFeeTarget = referralFeeTarget
		this.userPublicKey = userPublicKey
	}
}

export class QuoteResponse {

	public readonly routes: Route[]

	public readonly slot: number

	constructor(routes: Route[], slot: number) {
		this.routes = routes
		this.slot = slot
	}
}
