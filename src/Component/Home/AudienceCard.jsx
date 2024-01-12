

const AudienceCard = ({data}) => {

    return (
        <div className="text-center text-white bg-black p-4  rounded-xl hover:shadow-[#000244cc] hover:shadow-lg">
           <div className="h-24">
           <img className="w-20 mx-auto" src={data?.icon} alt="" />
           </div>
            <h2>{data?.name}</h2>
        </div>
    );
};

export default AudienceCard;