export class StatOverviewResponse {
	public readonly users_connected: number
	public readonly volume_all: number
	public readonly segment: StatSegment

	constructor(props:any) {
		this.users_connected = props.users_connected
		this.volume_all = props.volume_all
		this.segment = props.segment
	}
}

export class StatSegment {
	public readonly quote_count: number
	public readonly swap_count: number
	public readonly volume: number

	constructor(props:any) {
		this.quote_count = props.quote_count
		this.swap_count = props.swap_count
		this.volume = props.volume
	}
}