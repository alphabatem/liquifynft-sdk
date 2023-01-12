import {Route} from "./route";


export class SwapRequest {
	public route: Route
	public userPublicKey: string
	public priorityFee: number

	constructor(route: Route, userPublicKey: string, priorityFee: number) {
		this.route = route
		this.userPublicKey = userPublicKey
		this.priorityFee = priorityFee
	}
}

export class SwapResponse {
	public readonly transaction: string

	constructor(txn: string) {
		this.transaction = txn
	}
}