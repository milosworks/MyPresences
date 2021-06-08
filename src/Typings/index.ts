import { LocalStoragePlus } from '@vyrekxd/localstorage-plus'

interface Style {
	details?: string
	state: string
	startTimestamp: number
	largeImageKey: string
	largeImageText: string
	smallImageKey: string
	smallImageText: string
}

interface Presences {
	appID: string
	styles: Style[]
}

declare global {
	interface Storage {
		plus: LocalStoragePlus<Presences>
	}
}

export {}
