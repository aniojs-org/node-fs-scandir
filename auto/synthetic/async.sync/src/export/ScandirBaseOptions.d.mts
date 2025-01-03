import type {ScandirEntry} from "#~src/export/ScandirEntry.d.mts";

type Filter = {
	(entry : ScandirEntry) : Promise<boolean> | boolean;
}

export type ScandirBaseOptions = {
	/**
	 * @description
	 * This option can be set to filter entries.
	 */
	filter? : Filter

	/**
	 * @description
	 * This flag controls whether to first report directories (default)
	 * or files.
	 */
	reverse? : boolean;

	/**
	 * @description
	 * Specifies whether the entry path can be missing.
	 * The default is `false`.
	 */
	allow_missing_dir? : boolean;
}
