import React, { useEffect, useState } from "react";

const FetchData = ({ url }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`url`);
      const result = response.data;
      setData(result);
    }

    fetchData();
  }, [url]);
  return [data];
};

export default FetchData;
