import React from "react";
import PlayerControlFuncs from "./theme/Theme";
import SpotifyLogin from "./pages/auth/Login";

function App() {
    const token = localStorage.getItem("spotify_access_token");

    return (
        <div>
            {!token ? <SpotifyLogin /> : <PlayerControlFuncs />}
        </div>
    );
}

export default App;
