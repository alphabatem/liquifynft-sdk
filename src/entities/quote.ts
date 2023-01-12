import {Route} from "./route";

export class QuoteRequest {
	public readonly id: string

	public readonly inputMint: string

	public readonly outputMint: string

	public readonly swapMode: number

	public readonly slippage: number

	public readonly referralFee: number

	public readonly userPublicKey: string

	constructor({id, inputMint, outputMint, swapMode, slippage, referralFee, userPublicKey}) {
		this.id = id
		this.inputMint = inputMint
		this.outputMint = outputMint
		this.swapMode = swapMode
		this.slippage = slippage
		this.referralFee = referralFee
		this.userPublicKey = userPublicKey
	}
}

export class QuoteResponse {

	public readonly routes: Route[]

	public readonly slot: number

	constructor({routes, slot}) {
		this.routes = routes
		this.slot = slot
	}
}
