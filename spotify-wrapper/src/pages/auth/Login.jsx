import React from 'react';

const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const RESPONSE_TYPE = 'code';
const SCOPES = [
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
];

function SpotifyLogin() {
    const handleLogin = () => {
        const scope = SCOPES.join(' ');
        const authUrl = `${AUTH_ENDPOINT}?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&response_type=${RESPONSE_TYPE}&redirect_uri=${encodeURIComponent(process.env.REACT_APP_REDIRECT_URI)}&scope=${encodeURIComponent(scope)}&show_dialog=true`;
        window.location.href = authUrl;
    };

    return (
        <div>
            <button onClick={handleLogin}>Login mit Spotify</button>
        </div>
    );
}

export default SpotifyLogin;
