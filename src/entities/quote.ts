import {Route} from "./route";

export class QuoteRequest {
	public readonly id: string

	public readonly inputMint: string

	public readonly outputMint: string

	public readonly swapMode: number

	public readonly slippage: number

	public readonly referralFee: number

	public readonly userPublicKey: string

	constructor(props : any) {
		this.id = props.id
		this.inputMint = props.inputMint
		this.outputMint = props.outputMint
		this.swapMode = props.swapMode
		this.slippage = props.slippage
		this.referralFee = props.referralFee
		this.userPublicKey = props.userPublicKey
	}
}

export class QuoteResponse {

	public readonly routes: Route[]

	public readonly slot: number

	constructor(props : any) {
		this.routes = props.route
		this.slot = props.slot
	}
}
