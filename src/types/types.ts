import { type RouterOutputs } from "../utils/api";

export type Popup = RouterOutputs["popup"]["getAll"][0];
export type Link = RouterOutputs["link"]["get"];
export type Location = RouterOutputs["location"]["getAll"][0];
export type Tag = RouterOutputs["tag"]["getAll"][0];
export type Events = RouterOutputs["event"]["getAll"][0];
export interface LinkData {
  popupId: string;
  Instagram: string;
  Facebook: string;
  TikTok: string;
  Website: string;
}
