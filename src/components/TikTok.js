import React from "react";

const TikTok = ({ author, description, TikTokURL }) => {
  console.log(TikTokURL);
  return (
    <div className="flex flex-col w-96 rounded h-full text-white py-8 mx-auto bg-black px-2 text-sm content-start border border-yellow-200">
      <div class="aspect-w-16 aspect-h-9">
        <iframe
          title="tiktok"
          src={TikTokURL}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="text-center text-lg text-yellow-400 mt-2">{author}</div>
      <div className=" text-lg text-center text-indigo-600 mt-1">
        {description}
      </div>
    </div>
  );
};

export default TikTok;
