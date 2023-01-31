import {getApi} from "./core";
import {StatOverviewResponse} from "../entities/stats";

export async function getNftStats(id: string) {
	const resp = await getApi(`nfts/${id}/stats`)
	return resp as StatOverviewResponse
}
