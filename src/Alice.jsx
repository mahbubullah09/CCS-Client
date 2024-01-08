import React from "react";
import { IoSend } from "react-icons/io5";
import {encrypted, decrypted} from './ED'
import moment from "moment";

const Alice = () => {

    const time = moment().format("YYYY-MM-DD h:mm:ss a");

    const handleMessage = (e) =>{
        e.preventDefault();
        const msg = e.target.msg.value;
        console.log(msg);
        const message = encrypted(msg);
        console.log(message);
        const msgInfo ={
            message,
            time
        }
        console.log(msgInfo);


    }
  return (
    <div className="relative h-[30rem]  ">
      <div>
      
       <form onSubmit={handleMessage} action="">
       <div className="flex fixed  bottom-0 w-full items-center gap-6 p-8  bg-slate-200 rounded-2xl">
          <input
            className="border rounded-full  px-4 h-14 w-full  "
            placeholder="Whats on your mind?"
            type="text"
            name="msg"
          />
          <button type="submit">
            {" "}
            <IoSend />
          </button>
          </div>
       </form>
        
      </div>
      </div>
 
  );
};

export default Alice;
