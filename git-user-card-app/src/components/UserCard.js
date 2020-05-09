import React from 'react';
import PropTypes from 'prop-types';

function UserCard(props) {

    console.log("jo: UserCard.js: UserCard: render run");
    return (
        <div>
            <img src={"this.state.user.avatar_url"} alt="github user image"/>
            <h2>{"this.state.user.name"}</h2>
            <h4>Username: {"this.state.user.login"}</h4>
            <div className="gen-info closed">
                <p>Repositories: {"this.state.user public_repos"}</p>
                <p>Followers: {"this.state.user.followers"}</p>
                <p>Following: {"this.state.user.following"}</p>
                <p>GitHub: {"this.state.user.html_url"}</p>
            </div>
            <button>+++ expand +++</button> //onClick => toggle className'closed' display none

        </div>
    );
};

export default UserCard;