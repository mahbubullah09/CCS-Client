import React from "react";
import { encrypted, decrypted } from "./ED";
import moment from "moment";
import TimeAgo from "timeago-react";

const MessageCard = ({ data , refetch}) => {
  console.log('Encrypted message:', encrypted(data?.message) );
  console.log('Decrypted message:', decrypted(data?.message) );
  refetch()
  return (
    <div className="mb-6">
      <div className="flex items-start gap-6">
        <img className="w-16 rounded-full" src={data?.userImage} alt="" />
        <div>
          <h2>
            <span className="bg-slate-500 flex flex-col py-2 px-6 rounded-2xl">
              <span className="text-lg font-bold">{data?.user}</span>
              {decrypted(data?.message)}
            </span>
          </h2>
          <div>
            <h2>
              <TimeAgo datetime={data?.time} />
            </h2>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default MessageCard;
