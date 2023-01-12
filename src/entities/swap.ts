import {Route} from "./route";


export class SwapRequest {
	public route: Route
	public userPublicKey: string
	public priorityFee: number

	constructor(props : any) {
		this.route = props.route
		this.userPublicKey = props.userPublicKey
		this.priorityFee = props.priorityFee
	}
}

export class SwapResponse {
	public readonly transaction: string

	constructor(props : any) {
		this.transaction = props.transaction
	}
}