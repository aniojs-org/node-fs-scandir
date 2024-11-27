import type {ScandirSyncBaseOptions} from "#~auto/export/ScandirSyncBaseOptions.d.mts"

import type {ScandirEntry} from "#~src/export/ScandirEntry.d.mts";

type Map<T> = {
	(entry : ScandirEntry) : T & {then?: never};
}

export type ScandirSyncMappedOptions<T> = ScandirSyncBaseOptions & {
	map: Map<T>
}
