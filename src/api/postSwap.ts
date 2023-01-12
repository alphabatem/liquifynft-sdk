import {postApi} from "./core";
import {SwapRequest, SwapResponse} from "../entities";

export async function postSwap(req: SwapRequest) {
	const resp = await postApi("amm/nfts/swap", req)
	return resp as SwapResponse
}
