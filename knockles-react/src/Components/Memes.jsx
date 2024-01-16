import React, { useState, useEffect } from "react";

const Memes = () => {
  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Change the current image every 4 seconds
      setCurrentImage((prevImage) => (prevImage % 48) + 4);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  const getImagePath = (imageNumber) => `/Images/img${imageNumber}.png`;

  return (
    <div className="mx-4 md:mx-20 px-4 xl:px-32 lg:mt-16 flex flex-col items-center">
      <div className="flex flex-col gap-4 my-6 md:flex-row items-center justify-center">
        {[1, 2, 3, 4].map((number) => (
          <div key={number} className="w-[250px] md:w-[316px] [&:nth-child(1)]:md:w-[260px] [&:nth-child(4)]:md:w-[260px]">
            <img
              src={getImagePath(((currentImage + number - 1) % 48) + 1)}
              alt=""
              className="md:w-[316px] md:aspect-square object-cover"
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4 md:flex-row items-center justify-centerrounded-lg">
        {[5, 6, 7].map((number) => (
          <div key={number} className="w-[250px] md:w-[309px] [&:nth-child(1)]:md:w-[260px] [&:nth-child(3)]:md:w-[260px]">
            <img
              src={getImagePath(((currentImage + number - 1) % 48) + 1)}
              alt=""
              className="md:w-[309px] md:aspect-square object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Memes;
