
import { useRef } from "react";
//import Users from "../components/Users";
import axios from "axios";
import apiUrl from "../apiUrl";
import { Link as Anchor } from "react-router-dom";
//import { useDispatch } from "react-redux";
//import user_actions from "../store/actions/users"
//const { read_6_users } = user_actions


export default function SignUp() {
  

const name = useRef()
const lastName= useRef()
const country = useRef()
const photo = useRef()
const mail = useRef()
const password = useRef()


async function handleSignUp(){
  try{
    let data = {
      name: name.current.value,
      lastName: lastName.current.value,
      country: country.current.value,
      photo: photo.current.value,
      mail: mail.current.value,
      password: password.current.value,
}
await axios.post(
  apiUrl+'users/signup',
  data
)
console.log(data);

  }catch(error){
console.log(error);
  }

}
    
    
  

  

  return (
    <div className="flex justify-evenly">
    <form className="absolute inset-y-[3vw] mt-10 left-24 flex flex-col  p-[20px] w-[35vw] bg-white m-auto">



      <div className="flex-start">
      <h1 className="font-[600] text-[1.5vw] ">Create account</h1>
      
      <div className="flex space-x-2">
      <img className="w-7 object-cover" src="/img/google.png" alt="google" />
      <img className="w-12 object-cover" src="https://www.seekpng.com/png/detail/51-516623_facebook-transparent-background-facebook-round-logo-blue-circle.png" alt="facebook" />
      </div>
      
      </div>
      
      
      
      <div className="flex space-x-2">
      <div className="mb-5 flex items-center border-b border-gray-700 py-2 w-full">
      <input
        ref={name}
        type="name"
        className="appearance-none bg-transparent border-none w-1/2 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        name="name"
        id="name"
        defaultValue=""
        placeholder="First Name"
      />
      </div>


  
      <div className="mb-5 flex items-center border-b border-gray-700 py-2 w-full">
      <input
        ref={lastName}
        type="text"
        className="appearance-none bg-transparent border-none w-1/2 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        name="lastName"
        id="lastName"
        defaultValue=""
        placeholder="Last Name"
      />
      </div>
      </div>


      <div className="mb-5 flex items-center border-b border-gray-700 py-2 w-full">
      <input
        ref={country}
        type="text"
        className="appearance-none bg-transparent border-none  text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        name="country"
        id="country"
        defaultValue=""
        placeholder="Type country"
      />
      </div>

      <div className="mb-5 flex items-center border-b border-gray-700 py-2 w-full">
      <input
        ref={photo}
        type="text"
        className="appearance-none bg-transparent border-none  text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        name="photo"
        id="photo"
        defaultValue=""
        placeholder="Type Photo"
      />
      </div>


      <div className="mb-5 flex items-center border-b border-gray-700 py-2 w-full">
      <input
        ref={mail}
        type="text"
        className="appearance-none bg-transparent border-none  text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        name="mail"
        id="mail"
        defaultValue=""
        placeholder="Type Mail"
      />
      </div>

      <div className="mb-5 flex items-center border-b border-gray-700 py-2 w-full">
      <input
        ref={password}
        type="password"
        className="appearance-none bg-transparent border-none  text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        name="password"
        id="password"
        defaultValue=""
        placeholder="Type Password"
      />
      
      <input
          type="button"
          className="mb-5 w-full shadow bg-[#4F46E5] hover:bg-[#473fde] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
          value="Sign Up!"
          onClick={handleSignUp}
        />

      </div>
      
      <p>
           Already have an account?{" "}
           <Anchor
             className="text-[20px] font-bold text-[#4F46E5] cursor-pointer"
             to="/signin"
           >
             Sign in!
           </Anchor>
         </p>
      </form>

    {/* <Users /> */}

    </div>
    
  );

}

