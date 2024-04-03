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
}

export { Spotify }