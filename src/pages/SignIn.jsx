import { useRef } from "react";
import { Link as Anchor } from "react-router-dom";
//import axios from "axios";
import apiUrl from "../apiUrl";

export default function SignIn() {
  const mail_signin= useRef();
  const password_signin = useRef();

  async function handleSignIn() {
    let data = {
      mail: mail_signin.current.value,
      password: password_signin.current.value,
    };
    console.log(data);
  }

  return (
    <form className="absolute inset-y-[10vw] left-24 flex flex-col  p-[20px] w-[360px] bg-white m-auto
     py-2">
      
      <div className="flex-start">
      <h1 className="font-[600] text-[1.5vw] ">Sign In!</h1>
      </div>

      <div className="mb-5 flex items-center border-b border-gray-700 py-2 w-full">
      <input
        ref={mail_signin}
        type="text"
        className="appearance-none bg-transparent border-none  text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        name="mail_signin"
        id="mail_signin"
        defaultValue=""
        placeholder="Type Mail"
      />
      </div>


      <div className="mb-5 flex items-center border-b border-gray-700 py-2 w-full">
      <input
        ref={password_signin}
        type="password"
        className="appearance-none bg-transparent border-none  text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        name="password_signin"
        id="assword_signin"
        defaultValue=""
        placeholder="Type Password"
      />
      </div>


      


      <input
        type="button"
        className="mb-[10px] w-full shadow bg-[#4F46E5] hover:bg-[#473fde] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
        value="Sign In!"
        onClick={handleSignIn}
      />
      <p>
        Don't you have an account?{" "}
        <Anchor
          className="text-[20px] font-bold text-[#4F46E5] cursor-pointer"
          to='/signup'
        >
          Sign up!
        </Anchor>
      </p>
    </form>
    
  );
}