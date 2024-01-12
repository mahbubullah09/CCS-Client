import React, { useContext } from "react";
import { IoSend } from "react-icons/io5";
import {encrypted, decrypted} from './ED'
import moment from "moment";
import Swal from "sweetalert2";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { HmacSHA224 } from "crypto-js";
import MessageCard from "./MessageCard";
import { AuthContext } from "../Provider/authProvider";

const Alice = () => {

  const {user} = useContext(AuthContext)
  const userName = user?.displayName;
  const userImage = user?.photoURL;
  console.log(userImage);

  const time = moment().format("YYYY-MM-DD h:mm:ss a");

    const { data: message = [], refetch } = useQuery({
        queryKey: ["message"],
        queryFn: async () => {
          const res = await axios.get(`https://ccs-server.vercel.app/message`);
          return res.data;
        },
       
      });

    

    const handleMessage = (e) =>{
        e.preventDefault();
        const msg = e.target.msg.value;
        e.target.msg.value= ''
        const message = encrypted(msg);
    
        const msgInfo ={
            message,
            time,
            user :userName,
            userImage: userImage
        }
     

        fetch("https://ccs-server.vercel.app/message", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(msgInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
    
              if (data.insertedId) {
               
                refetch()
              }
            });


    }
  return (
    <div className=" h-[30rem]  ">
      <div>
        <div className="h-[22rem] md:h-[34rem] border  overflow-scroll">
            {
                message?.map((data) =><MessageCard key={data?.id} data={data} refetch={refetch}/>)
            }
        </div>
      
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
