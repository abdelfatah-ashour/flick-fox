import { useEffect, useState } from "react";
import axios from "../utility/createAxios";

export function useFetch(method, url) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function callApi() {
      setIsLoading(true);

      await axios({
        method,
        url,
      })
        .then(({ data }) => {
          setIsLoading(false);
          setData(data);
          setError(false);
        })
        .catch(() => {
          setIsLoading(false);
          setData([]);
          setError(true);
        });
    }

    callApi();

    // clean up
    return () => {
      setIsLoading(false);
      setData(null);
      setError(false);
    };
  }, [method, url]);

  return {
    isLoading,
    data,
    error,
  };
}
