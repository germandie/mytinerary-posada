import { useRef } from "react";
import { Link as Anchor } from "react-router-dom";
//import axios from "axios";
//import apiUrl from "../apiUrl";

export default function SignIn() {
  // const mail_signin = useRef("");
  // const password_signin = useRef("");

  // async function handleSignIn() {
  //   let data = {
  //     mail: mail_signin.current.value,
  //     password: password_signin.current.value,
  //   };
  //   console.log(data);
  // }

  return (
    <form className="flex flex-col items-center justify-center p-[20px] w-[360px] bg-white m-auto">
      <div class="flex items-center border-b border-teal-500 py-2">
    <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Jane Doe" aria-label="Full name"/>
    <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
      Sign Up
    </button>
    <button class="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button">
      Cancel
    </button>
  </div>
      <input
       // ref={password_signin}
        type="password"
        className="text-center mb-[10px] bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        name="password_signin"
        id="password_signin"
        defaultValue=""
        placeholder="Type Password"
      />
      <input
        type="button"
        className="mb-[10px] w-full shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
        value="Sign In!"
        //onClick={handleSignIn}
      />
      
      
    </form>
    
  );
}
