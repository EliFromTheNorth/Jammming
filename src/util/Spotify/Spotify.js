let accessToken;
const clientID = "171993a894d5453093af19258c5118af"
const redirectUrl = "http://localhost:3000"

const Spotify = {
    getAccessToken() {
        if (accessToken) return accessToken

        const extractAccessToken = window.location.href.match(/access_token=([^&]*)/);
        const expiryTime = window.location.href.match(/expires_in=([^&]*)/);  
        
        if (extractAccessToken && expiryTime) {
            accessToken = extractAccessToken[1]
            const expiration = Number(expiryTime[1])
            
            window.setTimeout(() => (accessToken = ""), expiration * 1000)
            
            window.history.pushState("Access token", null, "/")

            return accessToken
        }

        const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUrl}`
        window.location = redirect
    },

    search (term) {
        accessToken = Spotify.getAccessToken()
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            method: "GET",
            headers: { Authorization: `Bearer ${accessToken}` },
        })
            .then((response) => response.json())
            .then((jsonResponse) => {
                if (!jsonResponse) {
                  console.error("Error, no response");
                }
                return  jsonResponse.tracks.items.map(track => ({
                    id: track.id,
                    name: track.name,
                    artist: track.artists[0].name,
                    album: track.album.name,
                    uri: track.uri,
                }))
             })
        },

    savePlaylist(name, uris) {
        if (!name || !uris) return
        const accessTokenSavePlaylist = Spotify.getAccessToken()
        const header = { Authorization: `Bearer ${accessTokenSavePlaylist}`}
        let userId
        return fetch(`https://api.spotify.com/v1/me`, { headers: header })
            .then((response) => response.json())
            .then((jsonResponse) => {
                userId = jsonResponse.id
                let playlistId
                return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
                    headers: header,
                    method: "post",
                    body: JSON.stringify({ name: name }),
            })
            .then((response) => response.json())
            .then((jsonResponse) => {
              playlistId = jsonResponse.id
              return fetch(
                `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
                {
                  headers: header,
                  method: "post",
                  body: JSON.stringify({ uris: uris }),
                }
              )
            })
        })
    },
}

export { Spotify }