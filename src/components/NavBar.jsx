export default function NavBar() {
  return (
    <header className=" items-center font-segoe-ui text-2xl font-semibold text-black mx-[219px] bg-white  p-4">
      <div className=" mx-auto flex items-center h-30 justify-between">
        <div className="text-black font-bold text-2xl">My Tinerary</div>
        <nav className="flex items-center space-x-4">
          <a
            href="#"
            className="font-segoe-ui text-black text-lg font-semibold leading-8"
          >
            Home
          </a>
          <a
            href="#"
            className=" font-segoe-ui text-black text-lg font-semibold leading-8"
          >
            Cities
          </a>
          <button className="flex items-center space-x-2 w-[159px] h-[64px] px-4 bg-[#4F46E5] hover:bg-[#473fde] text-white text-lg font-semibold rounded-md py-[16px] px-[32px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-12 h-6"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                clipRule="evenodd"
              />
            </svg>
            <span>Login</span>
          </button>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-9 h-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </nav>
      </div>
    </header>
  );
}
