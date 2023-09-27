import { sleep } from "@/lib/sleep";
import { ICommit } from "@/models/Commit";
import { useEffect, useState } from "react";

export const useFetch = (url: string) => {
  const [data, setData] = useState<ICommit[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (err) {
      setError(err as any);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    data,
    loading,
    error,
  };
};
