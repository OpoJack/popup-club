export type Popup = {
  id: string;
  name: string;
  description: string;
  basedIn: string;
  links: Links;
  tags: TagsOnPopups[];
  isHot: boolean;
  orderType: string;
  events: Event[];
};

export type Links = {
  id?: string;
  popupId?: string;
  imageUrl?: string | null;
  facebook?: string | null;
  instagram?: string | null;
  twitter?: string | null;
  website?: string | null;
  youtube?: string | null;
};

export type Event = {
  id: string;
  popupid: string;
  locationid: string;
  description?: string;
  name?: string;
  date: Date;
  popup: Popup;
  location: Location;
};

export type Location = {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  mapsUrl: string;
  events: Event[];
};

export type Tags = {
  id: string;
  name: string;
};

export type TagsOnPopups = {
  id: string;
  popup: Popup;
  popupId: string;
  tag: Tags;
  tagId: string;
};
