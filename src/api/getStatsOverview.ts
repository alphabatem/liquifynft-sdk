import {getApi} from "./core";
import {StatOverviewResponse} from "../entities/stats";

export async function getStatsOverview() {
	const resp = await getApi(`stats/overview`)
	return resp as StatOverviewResponse
}
