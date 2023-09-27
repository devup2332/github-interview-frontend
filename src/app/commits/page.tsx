"use client";
import Commit from "@/components/Commit/Commit";
import Loading from "@/components/Loading/Loading";
import { useFetch } from "@/hooks/useFetch";

import { useState } from "react";

const CommitsPage = () => {
  const {
    data: commits,
    loading,
    error,
  } = useFetch("https://api.github.com/repos/devup2332/github-interview-frontend/commits");

  if (loading)
    return (
      <div className="flex justify-center items-center gap-2 text-white h-screen">
        <h2>Cargando</h2>
        <Loading className="w-10 h-10 animate-spin text-white fill-current" />
      </div>
    );
  return (
    <div className="py-5 grid gap-10">
      <h1 className="text-white text-3xl text-center">
        Repository Commits History
      </h1>
      <div className="m-auto w-10/12 grid gap-4 xl:w-6/12">
        {commits?.map(({ author, commit, sha }, index) => {
          return (
            <Commit key={index} author={author} commit={commit} sha={sha} />
          );
        })}
      </div>
    </div>
  );
};

export default CommitsPage;
