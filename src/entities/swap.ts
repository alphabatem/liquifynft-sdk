import {Route} from "./route";
import {VersionedTransaction} from "@solana/web3.js"

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
	public readonly transactions: string[]


	constructor(txns: string[]) {
		this.transactions = txns
	}

	toTransactions(): VersionedTransaction[] {
		const txns = []
		for (let i = 0; i < this.transactions.length; i++) {
			const txn = VersionedTransaction.deserialize(Buffer.from(this.transactions[i], "base64"))
			txns.push(txn)
		}
		return txns
	}
}