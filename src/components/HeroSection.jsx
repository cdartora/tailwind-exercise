import backgroundImage from "../assets/hero.jpg";
import logoHero from "../assets/logo.png";

export default function HeroSection() {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="flex flex-col items-center justify-center h-[calc(100vh-200px)] min-h-[400px] bg-cover bg-center bg-fixed p-4"
    >
      <div className="bg-white/30 py-2 px-4 rounded-xl text-center backdrop-blur-sm mb-5">
        <div className="relative">
          <img src={logoHero} alt="tw:mf logo" width="175" />
          <div className="flex justify-center items-center mt-[-70px]">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-500 gap-1">
              <div className="h-2 w-1 bg-pink-300 rounded-full animate-wavey"></div>
              <div className="h-3 w-1 bg-pink-200 rounded-full animate-wavey animation-delay-200"></div>
              <div className="h-4 w-1 bg-pink-100 rounded-full animate-wavey animation-delay-[150ms]"></div>
              <div className="h-3 w-1 bg-pink-200 rounded-full animate-wavey animation-delay-300"></div>
              <div className="h-2 w-1 bg-pink-300 rounded-full animate-wavey animation-delay-[75ms]"></div>
            </div>
          </div>
        </div>
        <div className="text-5xl font-bold">
          tw:<span className="text-sky-900">mf</span>
        </div>
      </div>
      <div className="mb-2 text-sm font-bold">
        Keep me updated with news and promotions
      </div>
      <div className=" flex flex-col w-full gap-2 sm:flex-row sm:w-min">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="rounded-sm border border-white/40 bg-white/30 backdroup-blur-md p-2 font-bold text-sky-900 pacleholder-zinc-500 outline-pink-500"
        />
        <button
          type="button"
          className="cursor-pointer rounded-sm bg-pink-500 py-2 px-4 font-bold transition-colors hover:bg-pink-500/90 hover:shadow-lg"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}
