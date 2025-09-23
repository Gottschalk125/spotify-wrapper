import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

/*function Callback() {
    const query = useQuery();
    const navigate = useNavigate();

    useEffect(() => {
        const code = query.get('code');
        const state = query.get('state');

        async function exchangeToken() {
            try {
                const response = await fetch('https://accounts.spotify.com/api/token', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: new URLSearchParams({
                        grant_type: 'authorization_code',
                        code: code,
                        redirect_uri: process.env.REACT_APP_REDIRECT_URI,
                        client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
                        client_secret: process.env.REACT_APP_SPOTIFY_CLIENT_SECRET
                    })
                });

                const data = await response.json();

                if (response.ok) {
                    localStorage.setItem('spotify_access_token', data.access_token);
                    localStorage.setItem('spotify_refresh_token', data.refresh_token);
                    navigate('/');
                } else {
                    throw new Error('Token exchange failed');
                }
            } catch (error) {
                console.error('Error exchanging token:', error);
                navigate('/login');
            }
        }

        if (code) {
            exchangeToken();
        } else {
            navigate('/login');
        }
    }, [query, navigate]);

    return (
        <div>
            <h2>Spotify Callback</h2>
            <p>Processing login...</p>
        </div>
    );
}*/

// In src/pages/auth/CallbackLogin.jsx
//import React, { useEffect } from 'react';
//import { useNavigate } from 'react-router-dom';

function Callback() {
    const navigate = useNavigate();

    useEffect(() => {
        const hash = window.location.hash.substring(1);
        const params = new URLSearchParams(hash);
        const accessToken = params.get('access_token');

        if (accessToken) {
            localStorage.setItem('spotify_access_token', accessToken);
            navigate('/');
        } else {
            navigate('/login');
        }
    }, [navigate]);

    return (
        <div>
            <h2>Spotify Callback</h2>
            <p>Processing login...</p>
        </div>
    );
}

export default Callback;


