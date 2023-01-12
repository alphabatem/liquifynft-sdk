export class Route {
	public readonly inputMint: string

	public readonly outputMint: string

	public readonly slippage: number

	public readonly swapMode: number

	public readonly marketRoute: MarketRoute

	public readonly token: TokenRoute

	public readonly platformFee: Fee

	constructor(props : any) {
		this.inputMint = props.inputMint
		this.outputMint = props.outputMint
		this.slippage = props.slippage
		this.swapMode = props.swapMode
		this.marketRoute = props.marketRoute
		this.token = props.token
		this.platformFee = props.platformFee
	}

}

export class MarketRoute {
	public readonly id: string

	public readonly marketId: string

	public readonly label: string

	public readonly inAmount: string

	public readonly outAmount: string

	public readonly lPFee: Fee

	constructor(props : any) {
		this.id = props.id
		this.marketId = props.marketId
		this.label = props.label
		this.inAmount = props.inAmount
		this.outAmount = props.outAmount
		this.lPFee = props.lPFee
	}

}

export class TokenRoute {
	public readonly id: string

	public readonly label: string

	public readonly inAmount: number

	public readonly OutAmount: number

	public readonly lPFee: number

	constructor(props : any) {
		this.id = props.id
		this.label = props.label
		this.inAmount = props.inAmount
		this.OutAmount = props.OutAmount
		this.lPFee = props.lPFee
	}

}

export class Fee {
	public readonly amount: number
	public readonly mint: string
	public readonly percent: number

	constructor(props : any) {
		this.amount = props.amount
		this.mint = props.mint
		this.percent = props.percent
	}
}