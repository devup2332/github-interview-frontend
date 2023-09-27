import { useEffect, useState } from "react";

interface ICommit {
  author: any;
  comments_url: string;
  commit: any;
  html_url: string;
  node_id: string;
  parents: any[];
  sha: string;
  url: string;
}

const sleep = (time: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(null);
    }, time);
  });
};

export const useFetch = (url: string) => {
  const [data, setData] = useState<ICommit[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      await sleep(2000);
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
