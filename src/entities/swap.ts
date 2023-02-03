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
	public readonly setupTransactions: string[]
	public readonly cleanupTransactions: string[]
	public readonly swapTransactions: string[]


	constructor(txns: string[]) {
		this.cleanupTransactions = txns
		this.swapTransactions = txns
		this.setupTransactions = txns
	}

	toSetupTransactions(): VersionedTransaction[] {
		return this._toTransactions(this.setupTransactions)
	}

	toSwapTransactions(): VersionedTransaction[] {
		return this._toTransactions(this.swapTransactions)
	}

	toCleanupTransactions(): VersionedTransaction[] {
		return this._toTransactions(this.cleanupTransactions)
	}

	_toTransactions(tx: string[]): VersionedTransaction[] {
		const txns = []
		for (let i = 0; i < tx.length; i++) {
			const txn = VersionedTransaction.deserialize(Buffer.from(tx[i], "base64"))
			txns.push(txn)
		}
		return txns
	}
}