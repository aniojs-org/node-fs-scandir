import type {ScandirEntry} from "../ScandirEntry.d.mts";

interface CallbackType {
	(entry : ScandirEntry) : Promise<void>;
}

interface FilterType {
	(entry : ScandirEntry) : Promise<boolean>;
}

interface MapType {
	(entry : ScandirEntry) : Promise<any>;
}

export type ScandirOptions = {
	/**
	 * @description
	 * If this option is set, instead of returning all entries as
	 * an array, "callback" is called for every entry.
	 */
	callback? : CallbackType | null

	/**
	 * @description
	 * This option can be set to filter entries.
	 */
	filter? : FilterType | null

	/**
	 * @description
	 * This option can be used to map entries.
	 */
	map? : MapType | null

	/**
	 * @description
	 * This flag controls whether to first report directories (default)
	 * or files.
	 */
	reverse? : boolean;

	/**
	 * @description
	 * Specifies whether returned array of entries should be sorted or not.
	 * The default is `false`.
	 */
	sorted? : boolean;

	/**
	 * @description
	 * Specifies whether the entry path can be missing.
	 * The default is `false`.
	 */
	allow_missing_dir? : boolean;
}