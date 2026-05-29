// mock delay for fetches

import {DelayType} from "./types.ts";

export const delay: DelayType = async (value) => {
    await new Promise(resolve => setTimeout(resolve, value));
}
