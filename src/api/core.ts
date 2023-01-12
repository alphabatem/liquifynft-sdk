export async function getApi(uri: string) {
	const resp = await fetch(fullUri(uri))
	return resp.json()
}

export async function postApi(uri: string, data: any) {
	const resp = await fetch(fullUri(uri), {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data)
	})

	return resp.json()
}

export function fullUri(path: string): string {
	return `${baseURI()}/${path}`
}

export function baseURI(): string {
	return "https://agg.alphabatem.com/v1"
}