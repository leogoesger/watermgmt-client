import * as React from "react";
import { graphql } from "react-apollo";
import fetchSong from "../../queries/fetchSongs";

type Props = {
    songs: {
        id: string;
    }[];
};

const HomeLayout: React.SFC<Props> = ({ songs }) => {
    if (!songs) {
        return null;
    }
    return <ul>{songs.map(song => <li key={song.id}>{song.id} </li>)}</ul>;
};

export default graphql(fetchSong, {
    props: ({ data }) => ({ ...data }),
})(HomeLayout as any);
