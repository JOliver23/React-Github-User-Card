import React from 'react';
import PropTypees from 'prop-types';

function UserCard(props) {

    console.log("jo: UserCard.js: UserCard: render run");
    return (
        <div>
            <img src={"apiCall.img_url"} alt="github user image"/>
            <h2>{"apiCall.user"}</h2>
            <div className="gen-info closed">
                <p>Repositories: {"apiCall.repositories"}</p>
                <p>Followers: {"apiCall.followers"}</p>
                <p>Following: {"apiCall.following"}</p>
                <p>GitHub: {"apiCall.url"}</p>
            </div>
            <button>+++ expand +++</button> //onClick => toggle className'closed' display none

        </div>
    );
};

export default UserCard;