import React from "react";
import PlayerControlFuncs from "./theme/Theme";
import SpotifyLogin from "./pages/auth/Login";
import PlayerControl from "./components/player/PlayerControl";

function App() {
    const token = localStorage.getItem("spotify_access_token");

    return (
        <div>
            {!token ? <SpotifyLogin /> : <PlayerControl />}
        </div>
    );
}

export default App;
