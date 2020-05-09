import React from 'react';
import PropTypes from 'prop-types';

function UserCard(props) {

    console.log("jo: UserCard.js: UserCard: render run", props);
    return (
        <div>
            <img src={props.user.avatar_url} alt="github user avatar"/>
            <h2>{props.user.name}</h2>
            <h4>Username: {props.user.login}</h4>
            <div className="gen-info closed">
                <p>Location: {"this.state.user.location"}</p>
                <p>Repositories: {"this.state.user.public_repos"}</p>
                <p>Followers: {"this.state.user.followers"}</p>
                <p>Following: {"this.state.user.following"}</p>
                <p>GitHub: {"this.state.user.html_url"}</p>
            </div>
            <button>+++ expand +++</button> <span>onClick => toggle className'closed' display none</span>
        </div>
    );
};

export default UserCard;