import TokGIF from "../static/tokenomics_cartoon.gif";

const Tokenomics = () => {
  const buttonFunction = () => {
    window.open("https://www.google.com", "_blank");
  };
  return (
    <>
      <div className="relative flex mx-6 md:mx-12 h-[50vh] my-32  md:mt-[-50px] lg:h-screen items-center justify-center">
        <img src={TokGIF} className="tok_cartoon" alt="" />
        <img
          className="absolute mt-[-70px] md:mt-[-100px]"
          src="/Images/knocMicsImg.png"
          alt=""
        />
        <img
          className="absolute mt-[30px] md:mt-[130px]"
          src="/Images/totalSupplyTextImg.png"
          alt=""
        />

        <div className="absolute font-baalo mt-[90px] md:mt-52  text-white text-base md:text-2xl font-medium">
          1,000,000,000,000
        </div>
        <div className="absolute font-baalo mt-[190px] text-center md:mt-72 text-white text-base md:text-2xl font-medium">
          Our token has 0/0 tax on all buys and sells. LP burnt & the contract
          ownership renounced.
        </div>
        <div className="rounded-full text-center hover:bg-white py-1 md:py-2 w-32  border mt-[320px] md:mt-[390px]">
          <button
            onClick={buttonFunction}
            className="text-white  text-base font-baalo font-semibold hover:text-red-600 "
          >
            VIEW CHART
          </button>
        </div>
      </div>
    </>
  );
};

export default Tokenomics;
