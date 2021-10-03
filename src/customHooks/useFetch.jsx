import { useState, useEffect } from "react";
function useFetch(url) {
  useEffect(() => {
    const getApi = async () => {
      const urlApi = await fetch(url);
      const res_JSON = await urlApi.json();
      setData(res_JSON);
    }  
    getApi();
  }, [url])
  const [Data, setData] = useState([]);
  return {Data};
}
export default useFetch;