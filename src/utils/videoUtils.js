// // Cache to store blob URLs
// const blobCache = new Map();

// // Check browser support for video formats
// export const checkVideoSupport = () => {
//   const video = document.createElement("video");
//   return {
//     mp4: video.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"') !== "",
//     webm: video.canPlayType('video/webm; codecs="vp8, vorbis"') !== "",
//     h264: video.canPlayType('video/mp4; codecs="avc1.42E01E"') !== "",
//   };
// };

// export const createBlobUrl = async (videoPath) => {
//   // Check if blob URL is already cached
//   if (blobCache.has(videoPath)) {
//     return blobCache.get(videoPath);
//   }

//   try {
//     // Add proper headers for content type
//     const response = await fetch(videoPath, {
//       headers: {
//         Accept: "video/mp4,video/webm,video/*;q=0.9,*/*;q=0.8",
//       },
//     });

//     // Get the content type from response
//     const contentType = response.headers.get("content-type");
//     const blob = await response.blob();

//     // Create blob with explicit type
//     const typedBlob = new Blob([blob], {
//       type: contentType || "video/mp4",
//     });
//     const blobUrl = URL.createObjectURL(typedBlob);

//     // Cache the blob URL
//     blobCache.set(videoPath, blobUrl);

//     return blobUrl;
//   } catch (error) {
//     console.error("Error creating blob URL:", error);
//     return null;
//   }
// };

// export const revokeBlobUrl = (videoPath) => {
//   if (blobCache.has(videoPath)) {
//     URL.revokeObjectURL(blobCache.get(videoPath));
//     blobCache.delete(videoPath);
//   }
// };

// export const clearBlobCache = () => {
//   blobCache.forEach((blobUrl) => {
//     URL.revokeObjectURL(blobUrl);
//   });
//   blobCache.clear();
// };

// utils/videoUtils.js

// Cache to store blob URLs
const blobCache = new Map();

// Check browser support for video formats
export const checkVideoSupport = () => {
  const video = document.createElement("video");
  return {
    mp4: video.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"') !== "",
    webm: video.canPlayType('video/webm; codecs="vp8, vorbis"') !== "",
    h264: video.canPlayType('video/mp4; codecs="avc1.42E01E"') !== "",
  };
};

export const createBlobUrl = async (videoPath) => {
  if (blobCache.has(videoPath)) {
    return blobCache.get(videoPath);
  }

  try {
    const response = await fetch(videoPath, {
      headers: {
        Accept: "video/mp4,video/webm,video/*;q=0.9,*/*;q=0.8",
      },
    });

    const contentType = response.headers.get("content-type") || "video/mp4";
    const blob = await response.blob();

    const typedBlob = new Blob([blob], { type: contentType });
    const blobUrl = URL.createObjectURL(typedBlob);

    const result = { blobUrl, contentType };
    blobCache.set(videoPath, result);

    return result;
  } catch (error) {
    console.error("Error creating blob URL:", error);
    return null;
  }
};

export const revokeBlobUrl = (videoPath) => {
  if (blobCache.has(videoPath)) {
    const { blobUrl } = blobCache.get(videoPath);
    URL.revokeObjectURL(blobUrl);
    blobCache.delete(videoPath);
  }
};

export const clearBlobCache = () => {
  blobCache.forEach(({ blobUrl }) => {
    URL.revokeObjectURL(blobUrl);
  });
  blobCache.clear();
};
