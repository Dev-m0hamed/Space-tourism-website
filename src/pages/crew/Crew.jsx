import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Header from "../../components/Header";
import crew from "./CrewData";

function Crew() {
  const [current, setCurrent] = useState(0);
  const member = crew[current];
  return (
    <div className="crew-bg">
      <Header />
      <main className="flex flex-1 p-6 md:p-10 md:overflow-hidden lg:pt-12 lg:pb-0">
        <section className="flex flex-col gap-6 flex-1 xl:max-w-[1110px] xl:mx-auto">
          <div className="w-full flex justify-center md:justify-start">
            <h1 className="flex gap-6 text-white leading-[normal] tracking-[2.4px] uppercase md:text-[20px] lg:text-[28px] lg:tracking-[4px]">
              <span className="font-bold opacity-25 lg:tracking-[4.72px]">
                02
              </span>
              Meet your crew
            </h1>
          </div>
          <div className="flex flex-col flex-1 gap-8 lg:flex-row">
            <div className="flex flex-col gap-6 pt-10 md:pt-10 lg:w-1/2 lg:gap-10 lg:items-start lg:justify-between">
              <AnimatePresence mode="wait">
                <motion.article
                  className="flex flex-col gap-6 text-center md:w-[514px] md:mx-auto lg:w-full lg:text-left lg:h-full lg:justify-center"
                  key={member.name}
                  initial={{ opacity: 0, x: -60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 60 }}
                  transition={{ duration: 0.35 }}
                >
                  <h2 className="flex flex-col gap-2 text-white font-bellefair text-[24px] leading-[normal] uppercase md:gap-4 md:text-[40px] lg:text-[56px]">
                    <span className="text-white/50 text-[18px] md:text-[24px] lg:text-[32px]">
                      {member.role}
                    </span>
                    {member.name}
                  </h2>
                  <p className="font-barlow text-[15px] text-blue-300 leading-[180%] mb-6 md:text-[16px] lg:text-[18px] lg:mb-0">
                    {member.description}
                  </p>
                </motion.article>
              </AnimatePresence>
              <ul className="flex justify-center gap-4 lg:pb-7 xl:pb-12 lg:gap-10">
                {crew.map((c, i) => (
                  <li key={c.role}>
                    <button
                      className={`pagination lg:size-[15px] ${
                        current === i && "opacity-100"
                      }`}
                      aria-label={`Show ${c.name}`}
                      onClick={() => setCurrent(i)}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                className="flex justify-center h-full relative md:min-h-[470px] lg:w-1/2"
                key={member.name}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.35 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="max-h-[340px] md:absolute md:top-0 md:max-h-[560px] md:m-auto lg:max-h-[90%]"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Crew;
