
import { useRef } from "react";
import { Link as Anchor, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import user_actions from "../store/actions/users";
import Swal from "sweetalert2";
const{ register } = user_actions;





export default function SignUp() {
const navigate = useNavigate()
const name = useRef()
const lastName= useRef()
const country = useRef()
const photo = useRef()
const mail = useRef()
const password = useRef()
const dispatch = useDispatch()


// async function handleSignUp(){
//   try{
//     let data = {
//       name: name.current.value,
//       lastName: lastName.current.value,
//       country: country.current.value,
//       photo: photo.current.value,
//       mail: mail.current.value,
//       password: password.current.value,
// }
// await axios.post(
//   apiUrl+'auth/register',
//   data
// )
// console.log(data);

//   }catch(error){
// console.log(error);
//   }

// }
    
    
async function handleSignUp(){
  let data = {
      name: name.current.value,
      lastName: lastName.current.value,
      country: country.current.value,
      photo: photo.current.value,
      mail: mail.current.value,
      password: password.current.value,
};
dispatch(register({ data }))
.then((res) => {
  //console.log(res);
  if (res.payload.token) {
    Swal.fire({
      icon: "success",
      title: "Successful registration, please enter your email and password!",
    });
    navigate('/signin');
  } else if (res.payload.messages.length > 0) {
    //let html = res.payload.messages.join('<br>')
    let html = res.payload.messages
      .map((each) => `<p>${each}</p>`)
      .join("");
    Swal.fire({
      title: "Something went wrong!",
      icon: "error",
      html,
    });
  }
})
.catch((err) => console.log(err));
}



  

  return (
    <div className="flex justify-evenly">
    <form className="  absolute inset-y-[3vw] mt-10 left-24 flex flex-col w-1/2 p-[20px]  bg-white m-auto rounded bg-opacity-70">



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
        className="w-full appearance-none bg-transparent border-none w-1/2 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
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
        className="w-full appearance-none bg-transparent border-none w-1/2 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        name="lastName"
        id="lastName"
        defaultValue=""
        placeholder="Last Name"
      />
      </div>
      </div>


      

      <div className="country space-x-2">
              <label className="form-label">Country / Region</label>
              <select
                ref={country}
                id="country"
                className="form-select country-select bg-white bg-opacity-40"
              >
                <option value=""></option>
                <option value="Argentina">Argentina</option>
                <option value="Brazil">Brazil</option>
                <option value="Uruguay">Uruguay</option>
                <option value="USA">USA</option>
                <option value="Italy">Italy</option>
                <option value="Norway">Germany</option>
                <option value="Spain">Spain</option>
                <option value="Japan">Japan</option>
              </select>
            </div>



      <div className="mb-5 flex items-center border-b border-black py-2 w-full">
      <input
        ref={photo}
        type="text"
        className="w-full appearance-none bg-transparent border-none  text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none object-cover"
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
        className="w-full appearance-none bg-transparent border-none  text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
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
        className="w-full appearance-none bg-transparent border-none  text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        name="password"
        id="password"
        defaultValue=""
        placeholder="Type Password"
      />
      </div>

      <div>
      <input
          type="button"
          className="mb-5 w-full shadow bg-[#4F46E5] hover:bg-[#473fde] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
          value="Sign Up!"
          onClick={handleSignUp}
        />
      </div>
      
     <div>
     <p>
           Already have an account?{" "}
           <Anchor
             className="text-[20px] font-bold text-[#4F46E5] cursor-pointer"
             to="/signin"
           >
             Sign in!
           </Anchor>
         </p>
     </div>
      </form>

    {/* <Users /> */}

    </div>
    
  );

}

