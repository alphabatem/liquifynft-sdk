import {getApi} from "./core";
import {CollectionResponse} from "../entities";

export async function getCollection(collectionAddr: string) {
	const resp = await getApi(`collections/${collectionAddr}`)
	return resp as CollectionResponse
}
