import React from "react";
import heroImage from "../assets/Hand coding-pana.png";

const ImageHero = () => {
  return (
    <div className='w-72  lg:w-[700px] object-cover'>
      <img src={heroImage} />
    </div>
  );
};

export default ImageHero;
