import React from "react";

function ImageBannerCard({ bg, title, contents }) {
  return (
    <div className="d-flex align-items-center justify-content-center text-white">
      <div className="d-flex flex-column p-4 text-center" style={{ backgroundColor: bg, width: '22rem' }}>
        {title && <p className="fs-6">{title}</p>}
        <hr className="bg-white mx-auto" style={{ width: '80%' }} />
        <div className="d-flex flex-column" style={{fontSize:'14px'}}>
          {contents}
        </div>
      </div>
    </div>
  );
}

export default ImageBannerCard;
