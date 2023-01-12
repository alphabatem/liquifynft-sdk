import {getApi} from "./core";
import {CollectionResponse} from "../entities";

export async function getCollections() {
	const resp = await getApi("collections")
	return resp as CollectionResponse
}
