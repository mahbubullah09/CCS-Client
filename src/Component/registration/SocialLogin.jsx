import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";

import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/authProvider";
import { FaGithub } from "react-icons/fa6";



const SocialLogin = () => {
    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();

    const {user, googleLogin, gitHubLogin} = useContext(AuthContext)
    console.log(user);

    const handleGithubSignIn = () => {
        gitHubLogin()
          .then(() => {
            navigate(location?.state ? location.state : '/')
            toast("You have successfully logged in");
          })
          .catch((error) => {
            toast.error( error.message);
          });
      };

    const handleGoogleSingin = () =>{
        googleLogin()
        .then(res =>  {
            toast.success('Succesfully logged in')
            navigate(location?.state ? location.state : '/')

    
    })
        .catch(error => console.log(error))
    }


    return (
        <div className="border border-slate-800 p-10 rounded-xl">
             <div className="divider px-4 text-2xl">Log In with</div>
            <div className=" text-center my-6 flex flex-col gap-6 items-center justify-center">
                <button onClick={handleGoogleSingin} className=" text-5xl flex gap-4 border border-orange-500 p-3 rounded-full"> <FcGoogle/> Google</button>
                <button onClick={handleGithubSignIn} className=" text-5xl flex gap-4 border border-orange-500 p-3 rounded-full"> <FaGithub></FaGithub> GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;

