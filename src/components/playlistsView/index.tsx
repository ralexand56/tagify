import React from "react";
import styled from "styled-components";
import ListView from "./../listView";

interface Props {}

export default function PlaylistsView({
  children,
}: React.PropsWithChildren<Props>) {
  return <ListView title="Spotify Playlists">{children}</ListView>;
}

const Container = styled.section``;
