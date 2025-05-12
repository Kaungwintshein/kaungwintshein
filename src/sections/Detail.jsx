import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/cursor.css";
import Navbar from "./Navbar";

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Detail = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX - 10,
        y: e.clientY - 10,
        duration: 0.1,
        ease: "none",
      });
    };

    const addHover = () => cursor.classList.add("hovered");
    const removeHover = () => cursor.classList.remove("hovered");

    window.addEventListener("mousemove", moveCursor);
    document.querySelectorAll("a, button, .hover-trigger").forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    // Updated Scroll animations
    gsap.utils.toArray(".fade-in").forEach((element) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.querySelectorAll("a, button, .hover-trigger").forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <div className="detail-page min-h-screen bg-black text-white">
      <div ref={cursorRef} className="custom-cursor"></div>

      <Navbar />

      <div className="container mx-auto max-w-7xl pt-30">
        {/* Header Section */}
        <header className="px-6 py-4">
          <h1 className="text-3xl font-bold mb-4">Intoxication Tracker App</h1>
          <div className="flex space-x-8 text-sm opacity-75">
            <span>App Concept</span>
            <span>2 Weeks</span>
            <span>Figma, Ps, Ai</span>
            <a href="#" className="underline">
              Full Case Study →
            </a>
          </div>
        </header>

        {/* Hero Section */}
        <section className="px-6 py-12">
          <div className="relative fade-in">
            <img
              src="/path-to-hero-image.jpg"
              alt="iPhone mockup with app interface"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </section>

        {/* Problem Statement Section */}
        <section className="px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="fade-in">
            <h2 className="text-xl font-semibold mb-4">Problem Statement</h2>
            <p className="text-gray-400">
              In June 2023, over 1,000 professionals, adults, and students
              participated in a Facebook trending topic (UXR design challenge)
              for alcohol-related awareness...
            </p>
          </div>
          <div className="fade-in">
            <h2 className="text-xl font-semibold mb-4">Objective</h2>
            <p className="text-gray-400">
              Design a mobile app that enhances user awareness about their
              alcohol consumption...
            </p>
          </div>
        </section>

        {/* App Screenshots Section */}
        <section className="px-6 py-12">
          <div className="grid grid-cols-2 gap-6 fade-in">
            <img
              src="/path-to-screen1.jpg"
              alt="App Interface 1"
              className="w-full rounded-lg"
            />
            <img
              src="/path-to-screen2.jpg"
              alt="App Interface 2"
              className="w-full rounded-lg"
            />
          </div>
        </section>

        {/* Role Section */}
        <section className="px-6 py-12">
          <div className="fade-in">
            <h2 className="text-xl font-semibold mb-4">Role</h2>
            <p className="text-gray-400">
              This is a project I took on alone in the course of 2 weeks...
            </p>
          </div>
        </section>

        {/* Hand-held Device Section */}
        <section className="px-6 py-12">
          <div className="flex justify-center fade-in">
            <img
              src="/path-to-hand-mockup.jpg"
              alt="Hand holding iPhone with app interface"
              className="w-full max-w-md"
            />
          </div>
        </section>

        {/* Results Grid */}
        <section className="px-6 py-12">
          <h2 className="text-xl font-semibold mb-8">Result</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 fade-in">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="transform rotate-12 hover:rotate-0 transition-transform duration-300"
              >
                <img
                  src={`/path-to-result-${index + 1}.jpg`}
                  alt={`Result screen ${index + 1}`}
                  className="w-full rounded-lg"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Reflection Section */}
        <section className="px-6 py-12">
          <div className="fade-in">
            <h2 className="text-xl font-semibold mb-4">
              Reflection & Takeaway
            </h2>
            <p className="text-gray-400">
              Working on Safe Steps was a great learning experience...
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Detail;
