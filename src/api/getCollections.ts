import {getApi} from "./core";
import {CollectionResponse} from "../entities";

export async function getCollections(page = 0, limit = 500,search="", onChainOnly = false) {
	let uri = `collections?page=${page}&limit=${limit}`
	if (search !== "")
		uri = `${uri}&search=${search}`
	if (onChainOnly)
		uri = `${uri}&onchain=true`

	const resp = await getApi(uri)
	return resp as CollectionResponse
}
