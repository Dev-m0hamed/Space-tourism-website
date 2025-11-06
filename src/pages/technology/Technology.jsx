import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import mobile from "../../assets/technology/background-technology-mobile.jpg";
import tablet from "../../assets/technology/background-technology-tablet.jpg";
import desktop from "../../assets/technology/background-technology-desktop.jpg";
import ResponsiveBg from "../../hooks/ResponsiveBg";
import Header from "../../components/Header";
import technology from "./TechData";

function Technology() {
  const [current, setCurrent] = useState(0);
  const tech = technology[current];
  return (
    <div
      className="bg"
      style={{
        backgroundImage: `url(${ResponsiveBg(mobile, tablet, desktop)})`,
      }}
    >
      <Header />
      <main className="flex flex-1 px-6 pt-6 pb-12 md:p-10 lg:py-12 lg:pr-0 xl:pb-10">
        <section className="flex flex-col gap-6 w-full xl:pl-20">
          <div className="flex justify-center w-full md:justify-start">
            <h1 className="flex gap-6 leading-[normal] tracking-[2.4px] text-white uppercase md:text-[20px] lg:text-[28px] lg:tracking-[4px]">
              <span className="font-bold text-white/25">03</span>Space launch
              101
            </h1>
          </div>
          <div className="flex flex-col flex-1 gap-8 lg:flex-row-reverse xl:justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                className="pt-16 relative -mx-6 md:-mx-10 lg:mx-0 lg:p-0 lg:max-w-[445px] xl:min-w-[450px]"
                key={tech.id}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.35 }}
              >
                <picture>
                  <source media="(min-width:1024px)" srcSet={tech.imageC} />
                  <source media="(min-width:768px)" srcSet={tech.imageB} />
                  <img
                    src={tech.image}
                    alt={tech.title}
                    className="size-full object-cover"
                  />
                </picture>
              </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                className="flex flex-col gap-10 xl:gap-16 lg:flex-row lg:items-center"
                key={tech.id}
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 60 }}
                transition={{ duration: 0.35 }}
              >
                <ul className="flex justify-center gap-4 lg:flex-col lg:gap-8">
                  {technology.map((t, i) => (
                    <li key={t.id}>
                      <button
                        className={`technology md:size-14 xl:size-20 ${
                          current === i && "bg-white text-blue-900"
                        }`}
                        onClick={() => setCurrent(i)}
                      >
                        {t.id}
                      </button>
                    </li>
                  ))}
                </ul>
                <article className="flex flex-col gap-4 md:w-lg md:mx-auto lg:gap-6">
                  <div className="flex flex-col gap-4 text-center uppercase font-bellefair leading-[normal] lg:text-left">
                    <h2 className="text-white/50 text-[18px] md:text-[24px] xl:text-[32px]">
                      The terminology...
                    </h2>
                    <h3 className="text-[24px] text-white md:text-[40px] xl:text-[56px]">
                      {tech.title}
                    </h3>
                  </div>
                  <p className="font-barlow text-[15px] leading-[180%] text-blue-300 text-center md:text-[16px] lg:text-left xl:text-[18px]">
                    {tech.description}
                  </p>
                </article>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Technology;
