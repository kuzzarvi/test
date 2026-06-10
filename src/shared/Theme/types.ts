import type { SIZE_MAP } from "./SIZE_MAP.ts";
import type { THEME_MAP } from "./THEME_MAP.ts";

export type Size = (typeof SIZE_MAP)[number];
export type Theme = (typeof THEME_MAP)[number];
