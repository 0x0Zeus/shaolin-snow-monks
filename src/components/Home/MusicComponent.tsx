interface MusicTypes {
  id: number;
  title: string;
  subtitle: string;
  artist: string;
  image: string;
  word: string;
}

const MusicComponent = (item: MusicTypes) => {
  return (
    <div className="items-start space-y-2 rounded-[20px] border-[3px] border-[#1A7CFF] bg-[#071B39] p-4">
      <img
        src={item.image}
        alt={item.title}
        className="h-auto w-full rounded-2xl"
      />
      <p className="text-xl font-medium text-white text-left pt-3">{item.title}</p>
      <p className="text-lg font-medium text-white text-left">{item.subtitle}</p>
      <p className="text-xs text-white text-left leading-5">{item.artist}</p>
      <div className="bg-[#1A7CFF]/10 border-l-2 border-[#1A7CFF] box-content p-2 text-left italic text-white/60 text-sm" >
        "{item.word}"
      </div>
    </div>
  );
};

export default MusicComponent;
