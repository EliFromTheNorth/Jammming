let accessToken;

const Spotify = {
    getAccessToken() {
        accessToken && accessToken
        const extractAccessToken = window.location.href.match(/access_token=([^&]*)/);
        const expiryTime = window.location.href.match(/expires_in=([^&]*)/);  
        
        if (extractAccessToken && expiryTime) {
            accessToken = extractAccessToken[1]
            const expiration = Number(expiryTime[1])
            
            window.setTimeout(() => (accessToken = ""), expiration * 1000)
            
            window.history.pushState("Access token", null, "/")

            return accessToken
        }
    }
}

export {Spotify}