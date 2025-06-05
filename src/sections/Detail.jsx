import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/cursor.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate, useParams } from "react-router-dom";
import { myProjects } from "../constants";
import VideoPlayer from "../components/VideoPlayer";

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Detail = () => {
  const cursorRef = useRef(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project]);

  useEffect(() => {
    const initializeProject = async () => {
      setLoading(true);
      if (slug && myProjects?.length) {
        const foundProject = myProjects.find((proj) => proj.slug === slug);
        if (foundProject) {
          setProject(foundProject);
        } else {
          navigate("/");
        }
      }
      setLoading(false);
    };

    initializeProject();
  }, [slug, navigate]);

  useEffect(() => {
    if (!project) return;

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
  }, [project]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-2xl">Loading...</div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-2xl">Project not found</div>
      </div>
    );
  }

  return (
    <div className="detail-page bg-black text-white cursor-none">
      <div ref={cursorRef} className="custom-cursor"></div>
      <Navbar />
      <div className="container mx-auto max-w-7xl pt-30">
        {/* Header Section */}
        <header className="px-6 py-4">
          <h1 className="text-5xl font-medium mb-10">{project?.title}</h1>
          <p className="text-lg mb-20 text-gray-400">{project?.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            <div className="pb-5">
              <p className="text-sm mb-3 text-gray-400">Category</p>
              <p className="text-xl">{project?.category}</p>
            </div>
            <div className="pb-5">
              <p className="text-sm mb-3 text-gray-400">Frameworks & Tools</p>
              <p className="text-xl">
                {project?.tags.map((tag, index) => (
                  <span key={tag.id}>
                    {tag.name} {index !== project.tags.length - 1 && ",\u00A0"}{" "}
                  </span>
                ))}
              </p>
            </div>
            <div className="pb-5">
              <p className="text-sm mb-3 text-gray-400">Under</p>
              <p className="text-xl">{project?.underCompany}</p>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="px-6 py-12">
          <div className="relative fade-in">
            <img
              src={project?.image}
              alt="iPhone mockup with app interface"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Problem Statement Section */}
        <section className="px-6 py-12">
          <div className="fade-in grid grid-cols-1 lg:grid-cols-3 gap-4 mb-10">
            <div className="flex gap-4 col-span-1">
              <p className="text-xs text-gray-400">01</p>
              <h2 className="text-2xl">{project?.objectives[0]?.key}</h2>
            </div>
            <p className="text-gray-400 col-span-2">
              {project?.objectives[0].value}
            </p>
          </div>
          <div className="fade-in grid grid-cols-1 lg:grid-cols-3 gap-4 mb-10">
            <div className="flex gap-4 col-span-1">
              <p className="text-xs text-gray-400">02</p>
              <h2 className="text-2xl">{project?.objectives[1].key}</h2>
            </div>
            <p className="text-gray-400 col-span-2">
              {project?.objectives[1].value}{" "}
            </p>
          </div>
        </section>

        {/* App Screenshots Section */}
        {project?.images[0] && (
          <section className="px-6 py-12 flex justify-center">
            <img
              src={project?.images[0]}
              alt="App Interface 1"
              className="w-full h-full !max-h-[786px] rounded-lg"
            />
          </section>
        )}
        {/* Role & Process Section */}
        <section className="px-6 py-12">
          <div className="fade-in grid grid-cols-1 lg:grid-cols-3 gap-4 mb-10">
            <div className="flex gap-4 col-span-1">
              <p className="text-xs text-gray-400">03</p>
              <h2 className="text-2xl">{project?.objectives[2].key}</h2>
            </div>
            <p className="text-gray-400 col-span-2">
              {project?.objectives[2].value}
            </p>
          </div>
          <div className="fade-in grid grid-cols-1 lg:grid-cols-3 gap-4 mb-10">
            <div className="flex gap-4 col-span-1">
              <p className="text-xs text-gray-400">04</p>
              <h2 className="text-2xl">{project?.objectives[3].key}</h2>
            </div>
            <p className="text-gray-400 col-span-2">
              {project?.objectives[3].value}
            </p>
          </div>
        </section>

        {/* App Screenshots Section */}
        {project?.images[1] && (
          <section className="px-6 py-12 flex justify-center">
            <img
              src={project?.images[1]}
              alt="App Interface 1"
              className="h-full !max-h-[786px] rounded-lg"
            />
          </section>
        )}
        {project?.images[2] && (
          <section className="px-6 py-12 flex justify-center">
            <img
              src={project?.images[2]}
              alt="App Interface 1"
              className="h-full !max-h-[786px] rounded-lg"
            />
          </section>
        )}
        {/* Actions & Reflections Section */}
        <section className="px-6 py-12">
          <div className="fade-in grid grid-cols-1 lg:grid-cols-3 gap-4 mb-10">
            <div className="flex gap-4 col-span-1">
              <p className="text-xs text-gray-400">05</p>
              <h2 className="text-2xl">{project?.objectives[4].key}</h2>
            </div>
            <p className="text-gray-400 col-span-2">
              {project?.objectives[4].value}
            </p>
          </div>
        </section>
        {/* Video Section */}
        {project?.videoUrl && <VideoPlayer videoUrl={project?.videoUrl} />}
        {/* <section className="px-6 py-12">
          <div className="grid grid-cols-2 gap-6 fade-in">
            <img
              src="/assets/projects/nexlynk-3.jpg"
              alt="App Interface 1"
              className="w-full rounded-lg"
            />
            <img
              src="/path-to-screen2.jpg"
              alt="App Interface 2"
              className="w-full rounded-lg"
            />
          </div>
        </section> */}

        {/* Results Grid */}
        {/* <section className="px-6 py-12">
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
        </section> */}
      </div>
      <div className="container mx-auto max-w-7xl">
        <Footer />
      </div>
    </div>
  );
};

export default Detail;
