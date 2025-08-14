const BASE_URL = 'https://api.spotify.com/v1';

class SpotifyAPI {
    static getAccessToken() {
        return localStorage.getItem('spotify_access_token');
    }

    static async request(endpoint, options = {}) {
        const token = this.getAccessToken();
        if (!token) throw new Error('No access token found');

        const res = await fetch(`${BASE_URL}${endpoint}`, {
            ...options,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                ...(options.headers || {})
            }
        });

        if (!res.ok) {
            const error = await res.json();
            throw new Error(error.error?.message || 'Spotify API error');
        }
        return res.json();
    }

    // Example: Get current user's profile
    static getMe() {
        return this.request('/me');
    }

    // Example: Get currently playing track
    static getCurrentlyPlaying() {
        return this.request('/me/player/currently-playing');
    }

    // Add more methods as needed
}

export default SpotifyAPI;