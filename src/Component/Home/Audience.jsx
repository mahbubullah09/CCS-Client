import React, { useEffect, useState } from 'react';
import AudienceCard from './AudienceCard';
import { FaLaptopCode } from "react-icons/fa6";

const Audience = () => {

    const [audience, setAudience] = useState([]);

    useEffect(() => {
      fetch("audience.json")
        .then((response) => response.json())
  
        .then((data) => setAudience(data));
    }, []);
    return (
        <div className="  py-20 w-full">
        <div className="text-center pb-6 text-2xl text-white font-bold  ">
          <h3 className=" bg-[#57059e] w-72 mx-auto  rounded-full flex items-center justify-center gap-2"> <FaLaptopCode/> Our <span className="text-[#ffe600]">User</span></h3>
        </div>
        <div className="max-w-4xl bg-[#57059e] mx-auto text-center gap-6   rounded-lg grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mb-10 p-8  ">
          {audience?.map((data, idx) => (
            <AudienceCard key={idx} data={data} />
          ))}
        </div>
      </div>
    );
};

export default Audience;