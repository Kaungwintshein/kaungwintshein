// import { useEffect, useRef, useState } from "react";
// import {
//   createBlobUrl,
//   revokeBlobUrl,
//   checkVideoSupport,
// } from "../utils/videoUtils";

// const VideoPlayer = ({ videoUrl }) => {
//   const videoRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);
//   const [blobUrl, setBlobUrl] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // useEffect(() => {
//   //   const observer = new IntersectionObserver(
//   //     (entries) => {
//   //       entries.forEach((entry) => {
//   //         if (entry.isIntersecting) {
//   //           setIsVisible(true);
//   //           videoRef.current?.play().catch(() => {});
//   //         } else {
//   //           setIsVisible(false);
//   //           videoRef.current?.pause();
//   //         }
//   //       });
//   //     },
//   //     {
//   //       root: null,
//   //       threshold: 0.5,
//   //     }
//   //   );

//   //   if (videoRef.current) {
//   //     observer.observe(videoRef.current);
//   //   }

//   //   return () => {
//   //     if (videoRef.current) {
//   //       observer.unobserve(videoRef.current);
//   //     }
//   //     observer.disconnect();
//   //   };
//   // }, []);

//   // Create blob URL when component mounts
//   useEffect(() => {
//     const loadVideo = async () => {
//       setIsLoading(true);
//       setError(null);

//       try {
//         // Check video format support
//         const support = checkVideoSupport();
//         if (!support.mp4 && !support.webm) {
//           throw new Error(
//             "Your browser does not support MP4 or WebM video formats"
//           );
//         }

//         const url = await createBlobUrl(videoUrl);
//         if (!url) {
//           throw new Error("Failed to load video");
//         }

//         setBlobUrl(url);
//       } catch (error) {
//         console.error("Error loading video:", error);
//         setError(error.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     if (videoUrl) {
//       loadVideo();
//     }

//     // Cleanup blob URL when component unmounts
//     return () => {
//       if (videoUrl) {
//         revokeBlobUrl(videoUrl);
//       }
//     };
//   }, [videoUrl]);

//   if (!videoUrl) return null;

//   return (
//     <section className="py-12 flex justify-center fade-in">
//       <div className="w-full aspect-video relative">
//         {isLoading ? (
//           <div className="absolute inset-0 flex items-center justify-center bg-gray-900 rounded-lg">
//             <div className="animate-pulse text-gray-400">Loading video...</div>
//           </div>
//         ) : error ? (
//           <div className="absolute inset-0 flex items-center justify-center bg-gray-900 rounded-lg">
//             <div className="text-red-400">{error}</div>
//           </div>
//         ) : blobUrl ? (
//           <video
//             ref={videoRef}
//             className="w-full h-full object-cover rounded-lg"
//             playsInline
//             muted
//             loop
//             autoPlay
//             controls={false}
//             speed={1.5}
//             preload="auto"
//             crossOrigin="anonymous"
//           >
//             <source src={blobUrl} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         ) : null}
//       </div>
//     </section>
//   );
// };

// export default VideoPlayer;

import { useEffect, useRef, useState } from "react";
import {
  createBlobUrl,
  revokeBlobUrl,
  checkVideoSupport,
} from "../utils/videoUtils";

const VideoPlayer = ({ videoUrl }) => {
  const videoRef = useRef(null);
  const [blobUrl, setBlobUrl] = useState(null);
  const [videoType, setVideoType] = useState("video/mp4");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadVideo = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const support = checkVideoSupport();
        if (!support.mp4 && !support.webm) {
          throw new Error(
            "Your browser does not support MP4 or WebM video formats."
          );
        }

        const result = await createBlobUrl(videoUrl);
        if (!result?.blobUrl) {
          throw new Error("Failed to load video.");
        }

        setBlobUrl(result.blobUrl);
        setVideoType(result.contentType);

        // Set playback speed once loaded
        if (videoRef.current) {
          videoRef.current.playbackRate = 1.5;
        }
      } catch (err) {
        console.error("Video load error:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (videoUrl) {
      loadVideo();
    }

    return () => {
      if (videoUrl) {
        revokeBlobUrl(videoUrl);
      }
    };
  }, [videoUrl]);

  if (!videoUrl) return null;

  return (
    <section className="py-12 flex justify-center fade-in">
      <div className="w-full aspect-video relative">
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900 rounded-lg">
            <div className="animate-pulse text-gray-400">Loading video...</div>
          </div>
        ) : error ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900 rounded-lg">
            <div className="text-red-400">{error}</div>
          </div>
        ) : blobUrl ? (
          <video
            ref={videoRef}
            className="w-full h-full object-cover rounded-lg"
            playsInline
            muted
            loop
            autoPlay
            controls={false}
            preload="auto"
            crossOrigin="anonymous"
          >
            <source src={blobUrl} type={videoType} />
            <source src={videoUrl} />
            Your browser does not support the video tag.
          </video>
        ) : null}
      </div>
    </section>
  );
};

export default VideoPlayer;
