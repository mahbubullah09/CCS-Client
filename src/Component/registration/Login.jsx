
import SocialLogin from "./SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";

import toast from "react-hot-toast";
import { AuthContext } from "../Provider/authProvider";



const Login = () => {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
   

    const {user,login} = useContext(AuthContext);
  
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const email =form.get("email");
    const password = form.get("password");
    console.log(email,password);

    if (password.length < 6) {
        toast.error("Password must be at least 6 charecter!");
        return;
      }

    
    //login user
    login(email, password)
      .then((res) => {
        toast.success('Succesfully logged in')

        navigate(location?.state ? location.state : '/')


    
    })
      .catch((error) => {

       
        toast.error('Invalid Email or Password');
        
        
      
      
      });



  };

  return (
    <div className=" my-10 max-w-fit mx-auto">

        <SocialLogin/>
      </div>
    
  );
};

export default Login;
