# LiquifyNFT SDK

This SDK Allows you to interface with the LiquifyNFT NFT Aggregator to provide your users the best price to instantly sell any NFT in any token.

## API Reference

All LiquifyNFT functions can be called directly via API for users not wishing to use the TS package

* [Swagger API Docs](https://api.liquifynft.com/swagger/index.html)

## SDK Reference

- TODO GenDoc

## Examples

### Quote

```js
const nft = ""
const inputMint = ""
const aToB = true //nftToToken
const outputMint = ""
const slippage = 0.5
const walletAddress = ""

postQuote(new QuoteRequest(nft, inputMint, outputMint, aToB, slippage, walletAddress)).then(r => {
	if (r.error) {
		//Handle Err
		return
	}

	//We have our route - commit to store & start refreshing
	console.log("Available routes", r.routes)
})
```

### Swap

```js
const walletAddress = new web3.PublicKey("0x0")
const selectedRoute = {} //Route from your quote
const priorityFee = 100 //Custom priority fee

const resp = await postSwap(new SwapRequest(selectedRoute, walletAddress, priorityFee))
if (resp.error) {
	console.error("Swap failed", resp.error)
	//Handle err
	return
}

//Convert our raw txns into VersionedTransactions
const txns = resp.toTransactions()

//If we can use the `signAllTransactions` method on the wallet - this is preferred to improve UX
if (wallet.signAllTransactions) {
	const signedTxns = await useWallet().signAllTransactions(txns)
	for (let i = 0; i < signedTxns.length; i++) {
		let sig = await this.con.sendRawTransaction(signedTxns[i].serialize(), {
			preflightCommitment: "confirmed",
			skipPreflight: false
		})

		if (!sig) {
			//Handle err
			return //Should bail as any other txns will fail after
		}

		//Handle success
	}
} else {
	//Send 1 by 1
	for (let i = 0; i < txns.length; i++) {
		let sig = await useWallet().sendTransaction(txns[i], this.con, {
			preflightCommitment: "confirmed",
			skipPreflight: false
		})

		if (!sig) {
			//Handle err
			return //Should bail as any other txns will fail after
		}

		//Handle success
	}
}

//All Txns Sent
console.log("Swap Complete")
```