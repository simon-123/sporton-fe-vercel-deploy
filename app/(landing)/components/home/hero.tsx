import { FiFastForward } from "react-icons/fi";
import Button from "../ui/button";
import Img from "next/image";

const HeroSection = () => {
  return (
    <section id="hero-section" className="container mx-auto h-screen flex">
      <div className="relative self-center">
        <img src="/images/img-basketball.png" 
        width={432} 
        height={423} 
        alt="image sporton" 
        className="grayscale absolute left-0 -top-20"
        />
        <div className="relative ml-40 w-full">
          <div className="text-primary italic">Friday sale, 50%</div>
          <h1 className="font-extrabold text-[80px] italic bg-gradient-to-b leading-tight from-black to-[#979797] bg-clip-text text-transparent">
            WEAR YOUR <br /> TOP-QUALITY <br /> SPORTSWEAR
          </h1>
          <p className="w-1/2 mt-5 leading-loose">Engineered for endurance and designed for speed. Experience gear that moves as fast as you do. Premium fabrics. Unmatched comfort. Limitless motion.</p>
          <div className="flex gap-5 mt-14">
            <Button size="normal">
              Explore More <FiFastForward />
            </Button>
            <Button variant="ghost">
              Watch Video
              <img src="/images/icon-play-video.svg" width={29} height={29} />
            </Button>
          </div>
        </div>
        <img src="/images/img-hero.png" width={700} height={950} alt="image sporton hero" className="absolute -right-5 top-1/2 -translate-y-1/2" />
      </div>
      <img src="/images/img-ornament-hero.svg" width={400} height={400} alt="image sporton" className="absolute -right-[200px] top-1/2 -translate-y-1/2" />
    </section>
  );
};

export default HeroSection;
