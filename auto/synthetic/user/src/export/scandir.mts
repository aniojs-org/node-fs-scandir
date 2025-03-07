import {createContext} from "@fourtune/realm-js/v0/runtime"

// vvv--- types needed for implementation
import type {ScandirOptions as Options} from "#~synthetic/async.sync/export/ScandirOptions.d.mts"
/* couldn't find a user defined type named 'Promise' at the top level */
import type {ScandirEntry} from "#~src/export/ScandirEntry.d.mts"
// ^^^--- types needed for implementation

import {scandirFactory as factory} from "#~synthetic/user/export/scandirFactory.mts"

export async function scandir(input_dir: string, options?: Options) : Promise<ScandirEntry[]> {
	const __fnImplementation = factory(createContext())

	return await __fnImplementation(input_dir, options)
}
