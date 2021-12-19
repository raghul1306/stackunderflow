import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, SetError] = useState(null);

    useEffect(() => {

        const cleanFetch = new AbortController();

        setTimeout(() => {
            fetch(url, {signal: cleanFetch.signal})
            .then(res => {
                if (!res.ok){
                    throw Error('Cannot Fetch data from requested server.');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
            })
            .catch((err) => {
                if (err.message === 'AbortError'){
                    console.log('Fetch Aborted.');
                }
                SetError(err.message);
                setIsPending(false);
            });
        }, 500)
        return () => cleanFetch.abort();
    }, [url]);

    return {data, isPending, error};
}

export default useFetch;