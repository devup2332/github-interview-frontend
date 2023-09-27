import { calculateTime } from "@/lib/calculateTimeAgo";
import Image from "next/image";

const Commit = ({ commit, author }: any) => {
  console.log({ commit, author });
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
      <section className="grid">
        <h2 className="text-white text-sm font-bold">{message}</h2>
        <h2 className="text-white text-sm">
          {authorCommit.name} - <span className="font-bold">{login}</span>
        </h2>
        <h2 className="text-sm text-gray-400">
          Commited {calculateTime(authorCommit.date)} days ago
        </h2>
      </section>
    </div>
  );
};

export default Commit;
