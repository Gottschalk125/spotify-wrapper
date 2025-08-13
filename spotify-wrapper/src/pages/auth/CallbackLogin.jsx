import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Callback() {
    const query = useQuery();

    useEffect(() => {
        const code = query.get('code');
        const state = query.get('state');

        if (code) {
            console.log('Authorization Code:', code);

        } else {
            console.error('Kein Code in URL gefunden');
        }
    }, [query]);

    return (
        <div>
            <h2>Spotify Callback</h2>
            <p>Verarbeite Login...</p>
        </div>
    );
}

export default Callback;
