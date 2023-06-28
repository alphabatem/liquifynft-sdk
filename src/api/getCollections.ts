import {getApi} from "./core";
import {CollectionResponse} from "../entities";

export async function getCollections(page = 0, limit = 500,search="") {
	const resp = await getApi(`collections?page=${page}&limit=${limit}&search=${search}`)
	return resp as CollectionResponse
}
