export interface Login {
  id: string | null;
  accessToken: string | null;
  refreshToken: string | null;
  username?: string;
  imageSrc: string | null;
}

export interface TagCategory {
  id: string;
  name: string;
  userid: string;
}

export interface Track {
  uri: string;
  name: string;
  album: Album;
  artists: Artist[];
}

interface Album {
  images: Image[];
}

interface Artist {
  name: string;
}

interface Image {
  url: string
}

export interface TrackTag {
  id?: string;
  isActive: boolean;
  name: string;
  uris: string[];
  userid: string;
}

export interface TagStore {
  ids: string[];
  items: Record<string, TrackTag>;
}
