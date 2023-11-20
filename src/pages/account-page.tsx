import Navbar from "../components/navbar";

const AccountPage = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="w-1/4 h-1/2 flex flex-col p-10 border">
          <p className="text-[20px] font-bold text-center">Admin login</p>
          <p className="my-5">Username</p>
          <input className="inputField" type="text" />
          <p className="my-5">Password</p>
          <input className="inputField" type="password" />
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 my-5">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
