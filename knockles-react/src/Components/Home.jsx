const Home = () => {
  const buttonFunction = () => {
    window.open("https://www.google.com", "_blank");
  };
  return (
    <div className={`section home mx-4 mt-4 !h-[100svh] md:h-[80svh] md:mt-[0px] 2xl:mt-12`} id="home">
      <img className="md:h-[50%] " src="/Images/home.gif" alt="" />
      <div className="flex lg:gap-3 justify-center items-center">
        <img src="/Images/KNOC.png" alt="" />
        <img src="/Images/Kles.png" alt="" />
      </div>
      <img
        className="mt-[240px] md:h-[330px] xl:w- 2xl:w-[50%] hidden md:block"
        id="web"
        src="/Images/LineBox.png"
        alt=""
      />
      <img
        className="mt-44 h-[370px] pt-12 w-full md:hidden"
        id="mobile"
        src="/Images/LineBoxMobile.png"
        alt=""
      />

      <div className="opacity-1 text-white mt-28 px-3 md:px-32 font-baalo md:mt-36 w-full font-medium text-[16px] lg:text-[26px] text-center ">
        When Charles Darwin visited Knockles island, he wrote:
      </div>
      <div className="text-white mt-[220px] px-6 sm:px-12 lg:px-32 xl:px-80 2xl:px-[530px] font-baalo w-full md:mt-[230px]  font-medium text-[16px] lg:text-[26px] text-center">
        {" "}
        "These creatures are the pinnacle of evolution, their physical abilities
        are matched by nothing but their intelligence. They are an example of
        what every living organism strives to be."
      </div>

      <div className="rounded-full text-center hover:bg-white py-1 md:py-2 w-28 lg:w-32  border mt-[320px] md:mt-[330px]">
        <button
          onClick={buttonFunction}
          className="text-white  text-base font-baalo font-semibold hover:text-red-600 "
        >
          VIEW CHART
        </button>
      </div>
      <img
        className="mt-[340px] md:mt-[390px] lg:mt-[400px] ml-[-110px] md:ml-[-345px] lg:ml-[-430px] h-12 md:h-15 lg:h-20 "
        src="/Images/cirlceImg.png"
        alt=""
      />
    </div>
  );
};

export default Home;
