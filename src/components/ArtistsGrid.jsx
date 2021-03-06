import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { routerActions } from 'connected-react-router';
import styled from 'styled-components';

import ArtistGridItem from './ArtistGridItem';

const ArtistsGrid = (props) => {
    const {className, artists, onArtistSelect} = props;
    const artistCardItems = artists.map((artist, index) =>
        <ArtistGridItem { ...artist }
                        key={ index }
                        onArtistSelect={() => onArtistSelect(artist.name) }/>);

    return (
        <div className={ className }>
            { artistCardItems }
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        artists: state.artists.list, ...props,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onArtistSelect: (name) => dispatch(routerActions.push(`/artists/${name}`)),
    };
};

const ArtistsGridContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(ArtistsGrid));

export default styled(ArtistsGridContainer)`
    width: 100%;
    background: #f1f1f1;
    overflow: hidden;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;
