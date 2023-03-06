import { type RouterOutputs } from "../utils/api";

export type Popup = RouterOutputs["popup"]["getAll"][0];
export type Link = RouterOutputs["link"]["getAll"][0];
export type Location = RouterOutputs["location"]["getAll"][0];
export type Tag = RouterOutputs["tag"]["getAll"][0];
export type Events = RouterOutputs["event"]["getAll"][0];
