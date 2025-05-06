import { useEffect, useRef, useState } from "react";

const About = () => {
  const grid2Container = useRef();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (grid2Container.current) {
      setIsReady(true);
    }
  }, []);

  return (
    <section className="c-space pt-10" id="about">
      {" "}
      {/* section-spacing */}
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Kaung Wint Shein</p>
            <p className="subtext">
              Over the last 3 years, I developed my frontend and backend dev
              skills to deliver dynamic and software and web applications. My
              approach combines strategic thinking with a deep understanding of
              user needs and technical constraints.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 2 */}
        <div className="grid-0 px-0 md:px-6">
          <div className="flex items-center justify-center h-full">
            <div className="">
              <h3 className="text-4xl">My Design Process</h3>
              <ul className="process-list">
                <li>
                  <span className="process-number">01</span>
                  <div className="process-content">
                    <h4>Research & Discovery</h4>
                    <p>
                      Understanding user needs, business goals, and technical
                      constraints
                    </p>
                  </div>
                </li>
                <li>
                  <span className="process-number">02</span>
                  <div className="process-content">
                    <h4>Planning & Architecture</h4>
                    <p>
                      Defining tech stacks, component structures, and scalable
                      solutions
                    </p>
                  </div>
                </li>
                <li>
                  <span className="process-number">03</span>
                  <div className="process-content">
                    <h4>Development & Implementation</h4>
                    <p>
                      Building responsive, high-performance interfaces with
                      clean code
                    </p>
                  </div>
                </li>
                <li>
                  <span className="process-number">04</span>
                  <div className="process-content">
                    <h4>Testing & Optimization</h4>
                    <p>
                      Validating functionality, ensuring accessibility, and
                      refining based on feedback
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Grid 3 */}
        <div className="grid-12">
          <div className="skills">
            <h3 className="text-4xl">Skills & Tools</h3>
            <div className="skill-tags">
              <span className="skill-tag">ReactJs</span>
              <span className="skill-tag">NextJs</span>
              <span className="skill-tag">NestJs</span>
              <span className="skill-tag">NodeJs</span>
              <span className="skill-tag">PHP/Laravel</span>
              <span className="skill-tag">Radix-ui</span>
              <span className="skill-tag">Tailwind CSS</span>
              <span className="skill-tag">Headless CMS</span>
              <span className="skill-tag">Design Systems</span>
              <span className="skill-tag">Clean Architecture</span>
              <span className="skill-tag">Motion Design</span>
              <span className="skill-tag">HTML/CSS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
