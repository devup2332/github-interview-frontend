import { calculateTime } from "@/lib/calculateTimeAgo";
import Image from "next/image";
import CopyIcon from "../Copy/Copy";
import { useState } from "react";
import CheckIcon from "../CheckIcon/CheckIcon";
import { sleep } from "@/lib/sleep";

const Commit = ({ commit, author, sha, html_url }: any) => {
  const { avatar_url, login } = author;
  const { author: authorCommit, message } = commit;
  const [clipboardReady, setClipbaordReady] = useState(false);
  const mediaQueryList = window.matchMedia("(min-width: 768px)");
  const mdMatch = mediaQueryList.matches;

  const copyShaClipbaord = async () => {
    setClipbaordReady(true);
    await navigator.clipboard.writeText(sha);
    await sleep(2000);
    setClipbaordReady(false);
  };

  const goToCommit = () => (window.location.href = html_url);

  return (
    <div
      className="py-3 px-4 lg:px-7 bg-commitBlue text-white rounded-xl flex gap-5"
      onClick={!mdMatch ? goToCommit : () => {}}
    >
      <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-full overflow-hidden">
        <img
          src={avatar_url}
          alt="Avatar Image"
          className="w-full h-full object-cover"
        />
      </div>
      <section className="grid lg:grid-cols-3 lg:grid-rows-3 w-9/12 items-center lg:w-full">
        <h2 className="text-white text-sm font-bold lg:col-start-1 lg:col-end-3 lg:row-start-1">
          {message.length > 70 ? `${message.substring(0, 70)} ...` : message}
        </h2>
        <h2 className="text-white text-sm lg:row-start-2 lg:row-end-3">
          {authorCommit.name} - <span className="font-bold">{login}</span>
        </h2>
        <h2 className="text-sm text-gray-400 lg:row-start-3 lg:row-end-4">
          Commited {calculateTime(authorCommit.date)}
        </h2>
        <div className="lg:row-start-1 lg:col-start-3 lg:col-end-3 justify-self-end items-stretch border-2 border-solid border-newGray rounded-md h-fit bg-bg2 w-28 hidden lg:flex">
          <button
            className="w-8 h-7 border-r-2 border-newGray border-solid flex items-center justify-center hover:bg-gray-700"
            onClick={copyShaClipbaord}
          >
            {clipboardReady ? (
              <CheckIcon className="text-green-600 fill-current" />
            ) : (
              <CopyIcon className="w-5 h-5 text-white fill-current" />
            )}
          </button>
          <div
            className="px-2 hover:bg-gray-700 cursor-pointer flex items-center"
            onClick={goToCommit}
          >
            {sha.substring(0, 7)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Commit;
