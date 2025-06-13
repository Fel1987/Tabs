import { useEffect, useState } from "react";

export function useFetch(url) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);
  const fetchData = async (url) => {
    setIsLoading(true);
    setIsError(false);
    try {
      const res = await fetch(url);

      if (!res.ok) {
        setIsError(true);
        console.log(`Could not fetch this resource. Error: ${res.status}`);
        return;
      }

      const result = await res.json();
      setData(result);
    } catch (error) {
      setIsError(true);
      console.log("Could not load this resources ", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return { isLoading, isError, data };
}
