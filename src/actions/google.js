import { Client } from "@googlemaps/google-maps-services-js";

const client = new Client();

const geocode = (address) => {
    const request = {
        params: {
            address,
            key: process.env.REACT_APP_FIREBASE_API_KEY
        }
    };

    return new Promise((resolve, reject) => {
        client.geocode(request)
            .then(resolve)
            .catch(reject)
    });
}

export {
    geocode
};
