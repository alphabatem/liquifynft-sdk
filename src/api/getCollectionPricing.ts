import {getApi} from "./core";

export async function getCollectionPricing() {
	const resp = await getApi("pricing/collections")
	return resp
}
