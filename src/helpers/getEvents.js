export default async function getEvents({ setEvents,
    setReferenceData,
    setIsLoading,
    setIsError,
    setErrorMessage }) {
    const fetchData = async () => {
        setIsError(false);
        setIsLoading(true);
        try {
            console.log("Making Request... ");
            const response = await fetch("/events");
            console.log("Made Request... ", response);
            if (response.ok) {
                const data = await response.json();
                setEvents(data);
                setReferenceData(data);
            } else {
                const errorStatus = response.status;
                throw new Error(`Failed to fetch data. Status: ${errorStatus}`);
            }
        } catch (error) {
            console.error("Error fetching data", error);
            setIsError(true);
            setErrorMessage(error.message || "Unknown error occurred");
        }
        setIsLoading(false);
    };
    fetchData();
}
