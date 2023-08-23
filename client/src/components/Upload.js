import React from "react";
import './Style.css'

const BACKEND_URI = "http://localhost:8080";

const Upload = ({ medias }) => {
  return (
    <div>
      {medias &&
        medias.map((media, mediaIndex) => {
          return (
            <div key={mediaIndex} id={`accordion-${mediaIndex}`}>
             
              {media.videos.map((video, videoIndex) => {
                  const collapseId = `collapse-${mediaIndex}-${videoIndex}`;

                  return (
              <div className="accordion "  >
              
                    <div className="accordion-item video-container" key={videoIndex}>
                      <h2 className="accordion-header"  id={`heading-${collapseId}`} >
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#${collapseId}`}
                          aria-expanded="true"
                          aria-controls={collapseId}
                        >
                          <span className="video-name">{media.name}</span> <span>{video.duration}</span>
                        </button>
                      </h2>
                      <div
                        id={collapseId}
                        className="accordion-collapse collapse"
                        aria-labelledby={`heading-${collapseId}`}
                        data-bs-parent={`#accordion-${mediaIndex}`}
                      >
                        <div className="accordion-body">
                          <video preload="auto" controls width="320" height="240">
                            <source src={`${BACKEND_URI}${video}`} />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      </div>
                    </div>
                    </div>
                  );
                })}




              
            </div>
          );
        })}
    </div>
  );
};

export default Upload;
