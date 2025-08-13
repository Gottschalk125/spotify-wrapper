import React from 'react';

const CLIENT_ID = 'DEINE_CLIENT_ID_HIER';  // Spotify Client ID
const REDIRECT_URI = 'http://127.0.0.1:3000/callback'; // Deine Redirect URI
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const RESPONSE_TYPE = 'code';
const SCOPES = [
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
];

function SpotifyLogin() {
    // Erzeugt die URL zur Spotify Login Seite
    const handleLogin = () => {
        const scope = SCOPES.join(' ');
        const authUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=${encodeURIComponent(scope)}&show_dialog=true`;
        window.location.href = authUrl;  // Weiterleitung
    };

    return (
        <div>
            <button onClick={handleLogin}>Login mit Spotify</button>
        </div>
    );
}

export default SpotifyLogin;
