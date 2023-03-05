import { RouterOptions } from "next/dist/server/router";
import { type RouterOutputs } from "../utils/api";

export type Popup = RouterOutputs["popup"]["getAll"][0];
export type Link = RouterOutputs["link"]["getAll"][0];
export type Location = RouterOutputs["location"]["getAll"][0];

// export type Events = RouterOptions["event"]["getAll"][0];
