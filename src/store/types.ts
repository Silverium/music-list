export interface Attributes {
  attributes?: Attributes;
  height?: string;
    rel?: string;
  type?: string;
  href?: string;
  'im:id'?: string;
  term?: string;
  scheme?: string;
  label?: string;
  amount?: string;
  currency?: string;
}
export interface ImContentType {
  'im:contentType': Attributes;
  attributes: Attributes;
}

export interface Id {
  attributes: Attributes;
}

export interface Album {
  'im:name': Attributes;
  'im:image'?: (Attributes)[] | null;
  'im:itemCount': Attributes;
  'im:price': Attributes;
  'im:contentType': ImContentType;
  rights: Attributes;
  title: Attributes;
  link: Attributes;
  id: Id;
  'im:artist': Attributes;
  category: Attributes;
  'im:releaseDate': Attributes;
}

export interface RootState {
    albums: Album[];
    errors: object[];
    albumsSearch: string;
    albumSelected?: Album;
}
