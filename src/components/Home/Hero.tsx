const Hero = () => {
  return (
    <div className="hero-bg pb-12 pt-[100px] sm:pb-[60px] md:pb-[90px] lg:pb-[135px]">
      <div className="container">
        <div className="space-y-10 px-4 pt-[50px] md:pt-[100px] max-w-[1000px]">
          <h1 className="hero-title text-4xl md:text-6xl font-semibold text-white">
            Shaolin Snow Monks
          </h1>
          <p className="text-left text-lg md:text-2xl text-white md:leading-[50px]">
            Ancient wisdom meets modern insights. Discover the teachings of the
            Seven Masters and their journey through the digital realm.
          </p>
          <button
            className="h-10 w-[180px] rounded-full bg-[#1A7CFF] text-white transition-transform duration-200 hover:scale-105"
            // onClick={() => }
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
