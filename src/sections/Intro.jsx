import React from "react";

const Intro = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="title uppercase">Frontend Developer</h1>
        <div className="description">
          <p>
            I'm currently orchestrating experiences at Fredoma for a leading
            tech company that rhymes with Snapple, headquartered in Phnom Penh,
            Cambodia.
          </p>
          <p>
            I'm a passionate frontend developer with extensive experience,
            leveraging research, data, and thoughtful design to craft
            delightful, scalable user interfaces.
          </p>
          <a href="#contact" className="cta">
            GET IN TOUCH <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
