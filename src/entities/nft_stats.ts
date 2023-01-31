import {CollectionResponse} from "./collection";

export class NftStatResponse {
	public readonly lastSaleTxn: number
	public readonly lastSalePrice: number
	public readonly purchaseDate: number
	public readonly collection: CollectionResponse

	constructor(props: any) {
		this.lastSaleTxn = props.lastSaleTxn
		this.lastSalePrice = props.lastSalePrice
		this.purchaseDate = props.purchaseDate
		this.collection = props.collection
	}
}