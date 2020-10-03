import React, { useState, useEffect } from 'react'

function SimpleRest() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [item, setItem] = useState([]);

    let headers = new Headers();
    let username = "kacper"
    let password = ""
    let url = "http://localhost:8443/api"

    headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));

    useEffect(() => {
        fetch(url, {
            method:'GET',
            headers: headers,
            //credentials: 'user:passwd'
        })
            .then(res => res.json())
            .then(
                (result) => {
                    // do sth with result
                    setIsLoaded(true);
                    console.log(result.response)
                    setItem(result.response);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div id="rest">
                {item}
            </div>
        );
    }
}

export default SimpleRest;