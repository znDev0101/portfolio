import myCv from "../documents/resume-frontend.pdf";

const Introdaction = () => {
  return (
    <div className='flex flex-col  '>
      <div className='flex flex-col  '>
        <h1 className='text-3xl font-bold text-center lg:text-start'>
          Hi, I'm Zulfa you can call me JULPA
        </h1>
        <p className='mt-4 text-center lg:text-start'>
          I'm a Frontend Web developer with 2 years experience work with React
          and NextJs, and much more i work with javascript ecosystem
        </p>
        <span className='italic text-[#bdc5c5] text-center lg:text-start'>
          "Everything object in JS"
        </span>
      </div>
      <a
        href={myCv}
        download={myCv}
        className='bg-[#fa6743] hover:bg-white hover:text-[#fa6743] hover: border-2 border-[#fa6743] font-bold rounded-full p-3 mt-5 mx-auto lg:ms-0 duration-300'
      >
        Download CV
      </a>
    </div>
  );
};

export default Introdaction;
