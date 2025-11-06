import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Header from "../../components/Header";
import destinations from "./data";

function Destination() {
  const [current, setCurrent] = useState(0);
  const planet = destinations[current];

  return (
    <div className="destination-bg">
      <Header />
      <main className="p-6 md:p-10 lg:p-0 lg:pt-12 lg:flex lg:flex-1">
        <section className="flex flex-col items-center gap-6 lg:gap-[35px] lg:flex-1">
          <div className="w-full flex justify-center md:justify-start lg:pl-22">
            <h1 className="flex gap-6 text-white leading-[normal] tracking-[2.4px] uppercase md:text-[20px] lg:text-[28px] lg:tracking-[4px]">
              <span className="font-bold opacity-25">01</span>Pick your
              destination
            </h1>
          </div>
          <div className="flex flex-col gap-8 lg:flex-row lg:flex-1 lg:w-full lg:gap-[60px]">
            <div className="flex justify-center items-center min-h-[203px] md:min-h-96 lg:w-1/2">
              <AnimatePresence mode="wait">
                <motion.img
                  src={planet.image}
                  alt={planet.name}
                  className="size-[150px] md:size-[300px] lg:size-[480px]"
                  key={planet.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.35 }}
                />
              </AnimatePresence>
            </div>
            <div className="flex flex-col gap-6 md:max-w-lg lg:w-1/2 lg:justify-center lg:gap-8 overflow-hidden">
              <ul className="flex justify-center gap-8 lg:justify-start">
                {destinations.map((d, i) => (
                  <li key={d.name}>
                    <button
                      className={`destination md:text-[16px] ${
                        current === i && "text-white"
                      }`}
                      onClick={() => setCurrent(i)}
                    >
                      {current === i && (
                        <motion.span
                          layoutId="underline"
                          className="absolute left-0 right-0 bottom-0 h-[3px] bg-white rounded-full"
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 25,
                          }}
                        />
                      )}
                      {d.name}
                    </button>
                  </li>
                ))}
              </ul>
              <AnimatePresence mode="wait">
                <motion.section
                  className=" flex flex-col gap-6 lg:gap-8"
                  key={planet.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35 }}
                >
                  <article className="flex flex-col gap-4 text-center lg:text-left">
                    <h2 className="text-white font-bellefair text-[56px] leading-[normal] uppercase md:text-[80px] lg:text-[96px]">
                      {planet.name}
                    </h2>
                    <p className="text-blue-300 font-barlow text-[15px] leading-[180%] md:text-[16px] lg:text-[18px] lg:h-[129.6px]">
                      {planet.description}
                    </p>
                  </article>
                  <hr className="h-px text-white opacity-25" />
                  <div className="flex flex-col gap-6 text-center md:flex-row md:justify-evenly lg:text-left">
                    <div className="flex flex-col gap-3 lg:w-1/2">
                      <span className="text-blue-300 uppercase text-sm leading-[normal] tracking-[2px]">
                        Avg. distance
                      </span>
                      <span className="text-white font-bellefair uppercase text-[28px] leading-[normal]">
                        {planet.distance}
                      </span>
                    </div>
                    <div className="flex flex-col gap-3 lg:w-1/2">
                      <span className="text-blue-300 text-sm leading-[normal] tracking-[2px] uppercase">
                        Est. travel time
                      </span>
                      <span className="text-white font-bellefair uppercase text-[28px] leading-[normal]">
                        {planet.travel}
                      </span>
                    </div>
                  </div>
                </motion.section>
              </AnimatePresence>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Destination;
