import SpotifyWebApi from "spotify-web-api-js";

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
  items: Record<string, Track>;
}

export const getTagByID = (
  id: string,
  tags: Record<string, TrackTag>
): TrackTag => tags[id];

export const getTrackByID = (
  id: string,
  tracks: Record<string, Track>
): Track => tracks[id];

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
