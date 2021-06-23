import { useCallback, useEffect, useState } from "react";
import { service, capitalizeFirstLetter } from "utils";
const useFetch = ({
  url,
  payload = null,
  prefix = "",
  isFetchComponentDidMount = false,
  defaultData = null,
  method = "GET",
  modelData = (data) => data,
}) => {
  const [data, setData] = useState(defaultData);
  const [loading, setLoading] = useState(false);
  const request = useCallback(
    (runtimePayload) => {
      setLoading(true);
      return service({
        method: method.toUpperCase(),
        url,
        data: runtimePayload
          ? runtimePayload
          : typeof payload === "function"
          ? payload()
          : payload,
      })
        .then((res) => {
          setLoading(false);
          const data = modelData(res.data);
          setData(data);
          return data;
        })
        .catch((err) => {
          setLoading(false);
          throw err;
        });
    },
    [url, payload, method, modelData]
  );

  useEffect(() => {
    if (isFetchComponentDidMount) request();
    return () => {};
  }, []);

  return {
    [prefix + "Request"]: request,
    [prefix + "Data"]: data,
    ["set" + capitalizeFirstLetter(prefix) + "Data"]: setData,
    [prefix + "SetData"]: (data) => setData(modelData(data)),
    [prefix + "Loading"]: loading,
  };
};

export default useFetch;
