import React from "react";
const BACKEND_URI = "http://localhost:8080";

const UploadsList = ({ medias, onDeleteVideo }) => {
  return (
    <div className="row">
      {medias &&
        medias.map((media, index) => {
          return (
            <div className="col-md-4" key={index}>
              <h3>{media.name}</h3>
              <div>
                {media.videos.map((video, videoIndex) => {
                  return (
                    <div key={videoIndex} className="video-container">
                      <video preload="auto" width="320" height="240" controls>
                        <source src={`${BACKEND_URI}${video}`} />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default UploadsList;
