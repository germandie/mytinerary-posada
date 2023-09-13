import { useRef } from "react";
import { Link as Anchor, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import user_actions from "../store/actions/users";
import Swal from "sweetalert2";
const { signin } = user_actions;

export default function SignIn() {
  const navigate = useNavigate();
  const mail_signin = useRef("");
  const password_signin = useRef("");
  const dispatch = useDispatch();

  async function handleSignIn() {
    let data = {
      mail: mail_signin.current.value,
      password: password_signin.current.value,
    };
    dispatch(signin({ data }))
      .then((res) => {
        //console.log(res);
        if (res.payload.token) {
          Swal.fire({
            icon: "success",
            title: "Logged in!",
          });
          navigate("/");
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

  //let user = useSelector((store) => store);
  //let user = useSelector(store=>store.users);
  //console.log(user);

  return (
    <form
      className="absolute inset-y-[10vh] left-24 mt-14 flex flex-col  p-[20px] w-[50vw] bg-white m-auto
     py-2 rounded bg-opacity-70
     xl:w-[30vw]"
    >
      <div className="flex-start">
        <h1 className="font-[600] text-[1.5vw] ">Sign In!</h1>
      </div>

      <div className="mb-5 flex items-center border-b border-gray-500 py-2 w-full">
        <input
          ref={mail_signin}
          type="text"
          className="w-full appearance-none bg-transparent border-none  text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          name="mail_signin"
          id="mail_signin"
          defaultValue=""
          placeholder="Type Mail"
        />
      </div>

      <div className="mb-5 flex items-center border-b border-gray-500 py-2 w-full">
        <input
          ref={password_signin}
          type="password"
          className="w-full appearance-none bg-transparent border-none  text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
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
          to="/signup"
        >
          Sign up!
        </Anchor>
      </p>

      <div className="flex flex-col justify-center space-y-3 mt-3">
        <button className="flex  items-center justify-center w-full bg-white text-gray-500 p-2 rounded-3xl border-solid border-2 border-gray-400 font-semibold bg-opacity-30 hover:bg-blue-50">
          <img
            className="w-7 object-cover mr-3"
            src="/img/google.png"
            alt="google"
          />
          <span className="text-[16px]">Continue with Google</span>
        </button>

        <button className="flex items-center justify-center w-full bg-white text-gray-500 p-2 rounded-3xl border-solid border-2 border-gray-400 font-semibold bg-opacity-30 hover:bg-blue-50">
          <img
            className="w-7 object-cover mr-3"
            src="/img/pngwing.com.png"
            alt="facebook"
          />
          <span className="text-[16px]">Continue with Facebook</span>
        </button>
      </div>
    </form>
  );
}
