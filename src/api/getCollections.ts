import {getApi} from "./core";
import {CollectionResponse} from "../entities";

export async function getCollections(page = 0, limit = 500) {
	const resp = await getApi(`collections?page=${page}&limit=${limit}`)
	return resp as CollectionResponse
}
