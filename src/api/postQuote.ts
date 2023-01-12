import {postApi} from "./core";
import {QuoteRequest, QuoteResponse} from "../entities";

export async function postQuote(req: QuoteRequest) {
	const resp = await postApi("amm/nfts/quote", req)
	return resp as QuoteResponse
}
