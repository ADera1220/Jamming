/*
    Initialize some critical variables:
        accessToken:    initialised as an empty string, this will hold the token after 
                        Spotify authenticates the user
        
        clientID:       Spotify needs this to authorize the App to access the API

        url:            the base URL needed to query the Spotify API

        redirectURI     the URL used to re-load the page when a query is completed
*/

let accessToken = '';
const clientID = '05f982d5f78547a8ab272b64d670f56f';
const url = 'https://accounts.spotify.com/authorize';
const redirectURI = 'https://jamming-app.herokuapp.com/';

// The Spotify API utility is initialised as an object
const Spotify = {

    getAccessToken() {
        /*
        This method will query Spotify's API to get an Acess Token. If the accessToken varibale
        is not empty, it will end the method. 
        1)  The method grabs the value of the "access_token" and "epires_in" keys of the URL 
            and stores them. 
        
        2)  If both values are truthy:
                a)  accessToken is assigned the value of the "access_token" 
                key and "expires_in" key is cast as a Number and assigned it's own constant. 
                
                b)  The browser window has it's timeout set to the "expires_in" value. After this 
                timeout, the accessToken is reset to an empty string.

                c)  The browser window has the key/value pairs for "access_token" and "expires_in"
                removed from the URL and reloads the page.
            
                d)  The accessToken is returned
        
        3)  If either value is falsy, the user is redirected to the Spotify user login page
            using the clientID for authorization. sucessful login will redirect the user
            back to the app with authentication and the getAccessToken() method will trigger
            with truthy values.
        */

        if(accessToken) {
            return accessToken;
        }

        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if(accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);

            window.setTimeout(() => (accessToken = ''), expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');

            return accessToken;
        } else {
            window.location = `${url}?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
        }
    },

    search(term) {
        /*
        This method will query spotify with a search term and return an array of track that
        match.
        
        1)  The accessToken is requested by calling the getAccessToken() method above.

        2)  We make a GET request to Spotify's search API, passing the term in the URL and 
            the accessToken in the header.
        
        3)  When the response is received, it is converted to JSON.

        4)  After the JSON is parsed from the response, it is checked to see if it is empty,
            if it is empty, an empty array is returned immediately.
        
        5)  Spotify's search API returns an array of tracks, each one containing many fields.
            The array of the response is iterated through, and the track it returned with
            the following fields:
                a)  URI
                b)  ID
                c)  Name
                d)  Primary Artist Name
                e)  Album Name
                f)  URL for a preview, if one is present
            
        6) The returned array is sent back to the App.
        */

        const accessToken = Spotify.getAccessToken();

        return fetch(
                `https://api.spotify.com/v1/search?type=track&q=${term}`,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                })
                .then(response => response.json())
                .then(jsonResponse => {
                    if(!jsonResponse.tracks.items) {
                        return [];
                    }

                    return jsonResponse
                            .tracks
                            .items
                            .map(track => {
                                return {
                                    uri: track.uri,
                                    id: track.id,
                                    name: track.name,
                                    artist: track.artists[0].name,
                                    album: track.album.name,
                                    preview: track.preview_url !== null ? track.preview_url : "https://p.scdn.co/mp3-preview/bbafd15ff484394a0ca106d5fef0a81eeea4ef5b?cid=05f982d5f78547a8ab272b64d670f56f"
                                };
                            });
                });
    },

    savePlaylist(name, trackList) {
        /*
        This method is for users to save Playlists to their Spotify account.

        1)  the name and trackList are checked for values, if they are both empty, then the
            method is ended.

        2)  The accessToken is generated with the getAccessToken() method above, and assigned
            to the accessToken constant. and a userID variable is initialized.

         3)  Two header constants are created, one for GET requests, and one for POST 
            requests, the POST request header specifies a return type for it's response.

        4)  The Spotify API is queried to get the user's account, the ID in the response
            is stored in the userID variable.

        5)  inside this query, we make a new POST query to the user's playlists, using
            the POST header, and adding the playlistName. This will create the playlist
            in the user's account, with no tracks yet.

        6)  After the playlist is created, another POST query is started, sending the 
            trackList in the body. This will update the spicified playlist with the
            new tracklist, and save it on the account.

        7) the requests are finished and the response is returned.
        */

        if(!name && !trackList) {
            return;
        }

        const accessToken = Spotify.getAccessToken();
        
        let userID;
        const headers = {
            Authorization: `Bearer ${accessToken}`
        };
        const headersPOST = {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
        }

        fetch(
            'https://api.spotify.com/v1/me',
            {
                headers: headers
            })
            .then(response => response.json())
            .then(jsonResponse => {
                userID = jsonResponse.id;

                return fetch(
                    `https://api.spotify.com/v1/users/${userID}/playlists`,
                    {
                        method: 'POST',
                        headers: headersPOST,
                        body: JSON.stringify({
                            name: name
                        })
                    })
                    .then(response => response.json())
                    .then(jsonResponse => {
                        const playlistID = jsonResponse.id;

                        return fetch(
                            `https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`,
                            {
                                method: 'POST',
                                headers: headersPOST,
                                body: JSON.stringify({
                                    uris: trackList
                                })
                            }
                        );
                    });

            });
    }
}

export default Spotify;