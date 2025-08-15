import React, { useEffect, useState } from 'react';
import SpotifyAPI from "../../services/api/SpotifyAPI";
import 'bootstrap-icons/font/bootstrap-icons.css';

function PlayerControl() {
    const [track, setTrack] = useState(null);

    useEffect(() => {
        async function fetchTrack() {
            try {
                const data = await SpotifyAPI.getCurrentlyPlaying();
                setTrack(data?.item);
            } catch (e) {
                console.error('Fetch track error:', e);
            }
        }
        fetchTrack();
    }, []);
    useEffect(() => {
        async function fetchTrack() {
            try {
                const data = await SpotifyAPI.getCurrentlyPlaying();
                setTrack(data?.item);
            } catch (e) {
                console.error('Fetch track error:', e);
            }
        }
        fetchTrack();
    }, []);

    const handlePlay = async () => {
        try {
            await SpotifyAPI.request('/me/player/play', { method: 'PUT' });
        } catch (e) {
            console.error('Play error:', e);
        }
    };

    const handlePause = async () => {
        try {
            await SpotifyAPI.request('/me/player/pause', { method: 'PUT' });
        } catch (e) {
            console.error('Pause error:', e);
        }
    };

    const handleNext = async () => {
        try {
            await SpotifyAPI.request('/me/player/next', { method: 'POST' });
        } catch (e) {
            console.error('Next error:', e);
        }
    };

    const handlePrevious = async () => {
        try {
            await SpotifyAPI.request('/me/player/previous', { method: 'POST' });
        } catch (e) {
            console.error('Previous error:', e);
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #1db954 0%, #191414 100%)',
        }}>
            <div style={{
                background: 'rgba(255, 255, 255, 0.15)',
                borderRadius: '32px',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                padding: '40px 60px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <img
                    src={track?.album?.images?.[0]?.url || 'https://via.placeholder.com/300'}
                    alt="Song Cover"
                    style={{ width: '300px', height: '300px', borderRadius: '24px' }}
                />
                <h2 style={{ color: '#fff', margin: 0 }}>{track?.name || 'No song playing'}</h2>
                <p style={{ color: '#eee', marginBottom: '32px' }}>
                    {track?.artists?.map(a => a.name).join(', ') || ''}
                </p>
                <div style={{ display: 'flex', gap: '24px' }}>
                    <button onClick={handlePrevious}>
                        <i className="bi bi-skip-start-fill"></i>
                    </button>
                    <button onClick={handlePlay}>
                        <i className="bi bi-play-fill"></i>
                    </button>
                    <button onClick={handlePause}>
                        <i className="bi bi-pause-fill"></i>
                    </button>
                    <button onClick={handleNext}>
                        <i className="bi bi-skip-end-fill"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PlayerControl;