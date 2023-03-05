import React from "react";
import "./styles.css";

const Avatar = ({
  bodyPath,
  eyesPath,
  hairPath,
  mouthPath,
  eyeBrowsPath,
  earringsPath,
  neckWearPath,
  glassesPath,
  hatPath,
  clothingL1Path,
  clothingL2Path,
  clothingL3Path,
  onRandom,
}) => {
  return (
    <div className="avatar-container">
      <div className="avatar">
        <div className="image-container">
          <img className="avatar-body image-style" src={bodyPath} alt="" />
          <img className="avatar-eyes image-style" src={eyesPath} alt="" />
          <img className="avatar-hair image-style" src={hairPath} alt="" />
          <img className="avatar-mouth image-style" src={mouthPath} alt="" />
          <img
            className="avatar-eyebrows image-style"
            src={eyeBrowsPath}
            alt=""
          />
          <img
            className="avatar-earrings image-style"
            src={earringsPath}
            alt=""
          />
          <img
            className="avatar-neckwear image-style"
            src={neckWearPath}
            alt=""
          />
          <img
            className="avatar-glasses image-style"
            src={glassesPath}
            alt=""
          />
          <img className="avatar-hats image-style" src={hatPath} alt="" />
          <img
            className="avatar-clothingL1 image-style"
            src={clothingL1Path}
            alt=""
          />
          <img
            className="avatar-clothingL2 image-style"
            src={clothingL2Path}
            alt=""
          />
          <img
            className="avatar-clothingL3 image-style"
            src={clothingL3Path}
            alt=""
          />
        </div>
        <button className="btn-random" onClick={onRandom}>
          Randomize!
        </button>
      </div>
    </div>
  );
};
export default Avatar;
