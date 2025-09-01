import { music } from "@/stack/music";
import MusicComponent from "./MusicComponent";

interface MusicTypes {
  id: number;
  title: string;
  subtitle: string;
  artist: string;
  image: string;
  word: string;
}

const Music = () => {
  return (
    <div className="container relative mx-auto px-4 py-12 text-center sm:px-6 sm:py-16 md:py-[85px] lg:px-8 space-y-5 md:space-y-10">
      <h1 className="music-title mt-8 text-xl font-semibold text-white sm:text-2xl md:text-3xl lg:text-4xl ">
        Meet the Seven Masters
      </h1>
      <p className="text-white md:text-xl">
        Each monk has mastered a sacred path, bringing unique wisdom to our community
      </p>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-8 md:mt-16 md:gap-10 lg:grid-cols-3 z-30">
        {music.map((item: MusicTypes) => (
          <MusicComponent key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Music;
