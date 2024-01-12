import { FaGithub } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="mt-20">
      <footer className="footer footer-center  bg-gradient-to-b from-[#272770] to-black  text-primary-content ">
        <div className="flex pt-20   ">
          <div className="bg-white p-8 rounded-full">
            <h2 className="bg-[#272770]  text-white rounded-full px-4 py-1 text-center text-4xl ">
              {" "}
              Task
              <span className="text-[#ffd900] font-bold text-5xl">Canvas</span>
            </h2>
          </div>
        </div>
        <div className="pt-0 pb-0">
          <ul
            tabIndex="0"
            className="text-white gap-8  flex flex-wrap justify-center  md:grid-cols-6 gap-5     "
          >
           <Link to={'/'}>
           <li>
              <a className="cursor-pointer">Home</a>
            </li>
           </Link>
            <Link to={'/about'}>
            <li>
              <a className="cursor-pointer">About Us</a>
            </li>
            </Link>
          <Link to={'/contact'}>
          <li>
              <a className="cursor-pointer">Contact</a>
            </li>
          </Link>

          <Link to={'/dashboard'}>
          <li>
              <a className="cursor-pointer">Dashboard</a>
            </li>
          </Link>
          </ul>
        </div>
        <div>
          <div className=" text-white pb-10 text-3xl flex flex-wrap justify-center gap-6 md:grid-cols-6   ">
            <Link to={"https://www.facebook.com/mahbubullah.09"}>
              {" "}
              <FaFacebook className="cursor-pointer"></FaFacebook>
            </Link>
            <Link to={"https://www.linkedin.com/in/mahbubullah09"}>
              <FaLinkedin className="cursor-pointer"></FaLinkedin>
            </Link>
            <Link to={"https://github.com/mahbubullah09"}>
              <FaGithub className="cursor-pointer"></FaGithub>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
