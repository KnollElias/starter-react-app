import axios from "axios";

export default async function getAllRequests(uri) {
    try {
        const response = await axios.get(`${uri}/events`);
        return response.data; // This will return the array of events
    } catch (error) {
        console.error(`Error fetching events: ${error}`);
        return null; // or throw an error, or however you'd like to handle this
    }
}
