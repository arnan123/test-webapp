import React from "react";

function ImageBannerCard({
  bg,
  title,
  contents,
}: {
  bg: string;
  title: string;
  contents: React.ReactNode;
}) {
  return (
    <div className="bottom-0 left-0  flex items-center justify-center text-white">
      <div className={`flex flex-col p-10 bg-[${bg}] w-[20rem] text-center`}>
        <p>{title}</p>
        <div className="w-full h-0.5 bg-white my-5"></div>
        <div className="flex flex-col gap-3 text-center">
          {contents}
          {/* <p>Residential</p>
          <p>Multi-Family</p>
          <p>Pricing</p> */}
        </div>
      </div>
    </div>
  );
}

export default ImageBannerCard;
