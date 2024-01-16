import React from "react";

const Ourstory = () => {
  const buttonFunction = () => {
    window.open("https://www.google.com", "_blank");
  };
  return (
    <div className="ourstoryBg bg-opacity-5  mt-8 mx-4 md:mx-20 px-4 xl:px-32 pt-4 lg:pt-20 xl:py-20 2xl:py-32 flex flex-col gap-3 md:gap-6 rounded-2xl text-center">
      <div className="font-baalo text-[44px] font-bold lg:text-[64px]">
        Our Story
      </div>
      <div className="font-baalo text-[14px] font-semibold lg:text-[20px] leading-[30px] lg:leading-[46px]">
        Many others have failed you in the past. You have been led astray by
        false prophecies, but the true Knockles has finally arrived to show you
        de way. The knuckles were once a lowly species, but once shown de way by
        their newly emerging true Chad leader Knockles, they began to prosper
        and eventually reached their full potential. They have began their march
        across the crypto space to deliver the greatest memes known to man.
        Knockles chad could be your dad. They are clicking de way to a DEX near
        you. theres nothing that can get in de way of based dev Knockles.
      </div>
      <div className="rounded-full text-center hover:bg-white py-1 md:py-2 w-32  border mx-auto mb-6 md:mb-[0px]">
        <button
          onClick={buttonFunction}
          className="text-white  text-base font-baalo font-semibold hover:text-red-600 "
        >
          VIEW CHART
        </button>
      </div>
    </div>
  );
};

export default Ourstory;
