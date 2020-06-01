import SpotifyWebApi from "spotify-web-api-js";
import axios from "axios";

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

interface Artist {
  name: string;
}

interface Image {
  url: string;
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

export interface TagTracksStore {
  ids: string[];
  items: Record<string, SpotifyApi.TrackObjectFull>;
}

export interface Playlist {
  collaborative: boolean;
  description: string;
  external_urls: ExternalUrls;
  followers: Followers;
  href: string;
  id: string;
  images: PlaylistImage[];
  name: string;
  owner: Owner;
  public: null;
  snapshot_id: string;
  tracks: Tracks;
  type: string;
  uri: string;
}

export interface ExternalUrls {
  spotify: string;
}

export interface Followers {
  href: null;
  total: number;
}

export interface PlaylistImage {
  url: string;
}

export interface Owner {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  type: string;
  uri: string;
  name?: string;
}

export interface Tracks {
  href: string;
  items: Item[];
  limit: number;
  next: string;
  offset: number;
  previous: null;
  total: number;
}

export interface Item {
  added_at: Date;
  added_by: Owner;
  is_local: boolean;
  track: Track;
}

export interface Track {
  album: Album;
  artists: Owner[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIDS;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

export interface Album {
  album_type: string;
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: AlbumImage[];
  name: string;
  type: string;
  uri: string;
}

export interface AlbumImage {
  height: number;
  url: string;
  width: number;
}

export interface ExternalIDS {
  isrc: string;
}

export const getTagByID = (
  id: string,
  tags: Record<string, TrackTag>
): TrackTag => tags[id];

export const getTrackByID = (
  id: string,
  tracks: Record<string, SpotifyApi.TrackObjectFull>
): SpotifyApi.TrackObjectFull => tracks[id];

export const getTrackURIsByTags = (tags: TrackTag[]) => {
  let trackIds: string[] = [];
  tags.forEach((tag) => {
    trackIds = [...trackIds, ...tag.uris];
  });

  let trackMap = new Map(trackIds.map((x) => [x, x]));

  return [...trackMap.keys()];
};

export const getTracksBySearchTerm = async (
  searchTerm: string,
  spotify: SpotifyWebApi.SpotifyWebApiJs,
  accessToken: string
) => {
  spotify.setAccessToken(accessToken);

  const response = await spotify.searchTracks(searchTerm, {
    limit: 50,
  });
  return response.tracks.items;
};

export const getTracksByURIs = async (
  uris: string[],
  spotify: SpotifyWebApi.SpotifyWebApiJs,
  accessToken: string
) => {
  try {
    spotify.setAccessToken(accessToken);

    const response = await spotify.getTracks(uris, {
      limit: 50,
    });

    return await response.tracks;
  } catch (error) {
    console.log(error);
  }
};

export const refreshToken = (
  token: string
): Promise<{ access_token: string }> => getNewAccessToken(token);

const getNewAccessToken = async (token: string) => {
  const url = `https://arcane-brushlands-65223.herokuapp.com/refresh_token/?refresh_token=${token}`;

  return (await axios.get(url)).data;
};

export const logOutUser = {
  id: null,
  accessToken: null,
  refreshToken: null,
  username: "Not Logged In",
  imageSrc: null,
};

export const getPlaylists = async (
  userid: string,
  spotify: SpotifyWebApi.SpotifyWebApiJs,
) => await spotify.getUserPlaylists(userid);