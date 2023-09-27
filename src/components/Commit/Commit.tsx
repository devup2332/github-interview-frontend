import { calculateTime } from "@/lib/calculateTimeAgo";
import Image from "next/image";
import CopyIcon from "../Copy/Copy";

const Commit = ({ commit, author, sha }: any) => {
  const { avatar_url, login } = author;
  const { author: authorCommit, message } = commit;

  return (
    <div className="py-3 px-7 bg-commitBlue text-white rounded-xl flex gap-5">
      <div className="w-20 h-20 rounded-full overflow-hidden">
        <img
          src={avatar_url}
          alt="Avatar Image"
          className="w-full h-full object-cover"
        />
      </div>
      <section className="grid grid-cols-2 grid-rows-3 w-full">
        <h2 className="text-white text-sm font-bold">{message}</h2>
        <h2 className="text-white text-sm row-start-2 row-end-3">
          {authorCommit.name} - <span className="font-bold">{login}</span>
        </h2>
        <h2 className="text-sm text-gray-400 row-start-3 row-end-4">
          Commited {calculateTime(authorCommit.date)} days ago
        </h2>
        <div className="row-start-1 col-start-2 col-end-3 justify-self-end flex items-center border-2 border-solid border-newGray rounded-md h-fit">
          <button className="w-8 h-7 border-r-2 border-newGray border-solid flex items-center justify-center">
            <CopyIcon className="w-5 h-5 text-white fill-current" />
          </button>
          <div className="px-2">{sha.substring(1, 8)}</div>
        </div>
      </section>
    </div>
  );
};

export default Commit;
