export class CollectionResponse {
	public readonly id: string
	public readonly name: string
	public readonly imageSrc: string
	public readonly markets: CollectionMarket[]
	public readonly firstCreator: string
	public readonly addedBy: string

	constructor(props : any) {
		this.id = props.id
		this.name = props.name
		this.imageSrc = props.imageSrc
		this.markets = props.markets
		this.firstCreator = props.firstCreator
		this.addedBy = props.addedBy
	}
}

export class CollectionMarket {
	public readonly hadeswap: string
	public readonly hyperspace: string
	public readonly elixir: string
	public readonly tensor: string
	public readonly coralCube: string
	public readonly magicEden: string


	constructor(props : any) {
		this.hadeswap = props.hadeswap
		this.hyperspace = props.hyperspace
		this.elixir = props.elixir
		this.tensor = props.tensor
		this.coralCube = props.coralCube
		this.magicEden = props.magicEden
	}
}