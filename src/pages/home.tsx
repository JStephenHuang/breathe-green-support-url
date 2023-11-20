import Navbar from "../components/navbar";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <p className="text-[40px]">BREATH GREEN SUPPORT URL.</p>
        <p className="lightFont">
          If you have any problems or questions, contact
          breathegreen23@gmail.com.
        </p>
      </div>
    </div>
  );
};

export default Home;
