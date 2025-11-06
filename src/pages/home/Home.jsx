import { Link } from "react-router-dom";
import { motion } from "motion/react";
import mobile from "../../assets/home/background-home-mobile.jpg";
import tablet from "../../assets/home/background-home-tablet.jpg";
import desktop from "../../assets/home/background-home-desktop.jpg";
import ResponsiveBg from "../../hooks/ResponsiveBg";
import Header from "../../components/Header";

function Home() {
  return (
    <div
      className="bg"
      style={{
        backgroundImage: `url(${ResponsiveBg(mobile, tablet, desktop)})`,
      }}
    >
      <Header />
      <main className="flex flex-1 p-6 md:px-10 md:py-32 lg:px-0 hero">
        <section className="flex flex-col items-center justify-between flex-1 md:gap-16 md:max-w-lg lg:max-w-[1110px] lg:flex-row lg:gap-0 mx-auto">
          <motion.article
            className="flex flex-col text-center gap-6 lg:text-left"
            initial={{ rotateX: 70, opacity: 0, y: 15 }}
            animate={{ rotateX: 0, opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ transformOrigin: "bottom", perspective: 1200 }}
          >
            <h1 className="text-blue-300 uppercase tracking-[2.4px] leading-[normal] md:text-[28px] md:tracking-[4px]">
              So, you want to travel to
            </h1>
            <h2 className="text-[80px] text-white font-bellefair uppercase leading-[normal] md:text-[144px]">
              Space
            </h2>
            <p className="font-barlow text-blue-300 text-[15px] leading-[180%] md:text-[16px] lg:text-[18px]">
              Let's face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we'll give you a truly out of
              this world experience!
            </p>
          </motion.article>
          <div className="flex items-center justify-center flex-1 w-full md:max-w-lg md:flex-none lg:justify-end lg:h-full">
            <Link
              className="flex items-center justify-center size-36 md:size-[272px] rounded-full bg-white text-blue-900 font-bellefair text-lg md:text-[32px] leading-[normal] uppercase cursor-pointer hover:shadow-[0_0_0_88px_rgba(255,255,255,0.1)] hover:text-blue-900/50 transition duration-300 scale-up"
              to="/destination"
              role="button"
            >
              Explore
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
