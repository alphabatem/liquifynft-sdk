import {getApi} from "./core";
import {NftStatResponse} from "../entities/nft_stats";

export async function getNftStats(id: string) {
	const resp = await getApi(`nfts/${id}/stats`)
	return resp as NftStatResponse
}
