import React, { useState, useEffect } from "react";
import Avatar from "../../components/Avatar";
import PartList from "../../components/PartList";
import { randomImages } from "../../utils/randomFunction";
import "./styles.css";

const Main = () => {
  const [bodyPath, setBodyPath] = useState(null);
  const [eyesPath, setEyesPath] = useState(null);
  const [hairPath, setHairPath] = useState(null);
  const [neckWearPath, setNeckWearPath] = useState(null);
  const [mouthPath, setMouthPath] = useState(null);
  const [eyeBrowsPath, setEyeBrowsPath] = useState(null);
  const [earringsPath, setEarringsPath] = useState(null);
  const [glassesPath, setGlassesPath] = useState(null);
  const [hatPath, setHatPath] = useState(null);
  const [clothingL1Path, setClothingL1Path] = useState(null);
  const [clothingL2Path, setClothingL2Path] = useState(null);
  const [clothingL3Path, setClothingL3Path] = useState(null);

  const handleRandom = () => {
    const randomBodyIndex = randomImages("body");
    setBodyPath(`images/body/${randomBodyIndex}.png`);
    const randomEyesIndex = randomImages("eyes");
    setEyesPath(`images/eyes/${randomEyesIndex}.png`);
    const randomHairIndex = randomImages("hair");
    setHairPath(`images/hair/${randomHairIndex}.png`);
    const randomNeckWearIndex = randomImages("neckWear");
    setNeckWearPath(`images/accessories/neckwear/${randomNeckWearIndex}.png`);
    const randomMouthIndex = randomImages("mouth");
    setMouthPath(`images/mouths/${randomMouthIndex}.png`);
    const randomEyeBrowsIndex = randomImages("eyebrows");
    setEyeBrowsPath(`images/eyebrows/${randomEyeBrowsIndex}.png`);
    const randomEarringsIndex = randomImages("earrings");
    setEarringsPath(`images/accessories/earrings/${randomEarringsIndex}.png`);
    const randomGlassesIndex = randomImages("glasses");
    setGlassesPath(`images/accessories/glasses/${randomGlassesIndex}.png`);
    const randomHatIndex = randomImages("hats");
    setHatPath(`images/accessories/hats/${randomHatIndex}.png`);
    const randomClothingL1Index = randomImages("clothingL1");
    setClothingL1Path(`images/clothes/layer_1/${randomClothingL1Index}.png`);
    const randomClothingL2Index = randomImages("clothingL2");
    setClothingL2Path(`images/clothes/layer_2/${randomClothingL2Index}.png`);
    const randomClothingL3Index = randomImages("clothingL3");
    setClothingL3Path(`images/clothes/layer_3/${randomClothingL3Index}.png`);
  };

  useEffect(() => {
    handleRandom();
  }, []);
  return (
    <>
      <img
        className="background"
        src="https://anhdepfree.com/wp-content/uploads/2018/12/Space-Wallpaper-hinh-nen-may-tinh-khong-gian-2.jpg"
        alt=""
      />
      ;
      <div className="app">
        <div className="title">
          <h1>CHARACTER</h1>
        </div>
        <div className="sub-title">
          <h1>🛠️CUSTOMIZATION🛠️</h1>
        </div>
        <div className="avatar-group">
          <Avatar
            bodyPath={bodyPath}
            eyesPath={eyesPath}
            hairPath={hairPath}
            neckWearPath={neckWearPath}
            mouthPath={mouthPath}
            eyeBrowsPath={eyeBrowsPath}
            earringsPath={earringsPath}
            glassesPath={glassesPath}
            hatPath={hatPath}
            clothingL1Path={clothingL1Path}
            clothingL2Path={clothingL2Path}
            clothingL3Path={clothingL3Path}
            onRandom={handleRandom}
          />
          <div className="part-list">
            <PartList
              title="Body"
              numberOfItems={17}
              height={60}
              path="images/body"
              selectedPath={bodyPath}
              onClick={setBodyPath}
            />
            <PartList
              title="Eyes"
              numberOfItems={24}
              height={60}
              path="images/eyes"
              selectedPath={eyesPath}
              onClick={setEyesPath}
            />
            <PartList
              title="Hair"
              numberOfItems={73}
              height={60}
              path="images/hair"
              selectedPath={hairPath}
              onClick={setHairPath}
            />
            <PartList
              title="Neckwear"
              numberOfItems={18}
              height={60}
              path="images/accessories/neckwear"
              selectedPath={neckWearPath}
              onClick={setNeckWearPath}
            />
            <PartList
              title={"Mouth"}
              numberOfItems={24}
              height={60}
              path="images/mouths"
              selectedPath={mouthPath}
              onClick={setMouthPath}
            />
            <PartList
              title="Eyebrows"
              numberOfItems={15}
              height={60}
              path="images/eyebrows"
              selectedPath={eyeBrowsPath}
              onClick={setEyeBrowsPath}
            />
            <PartList
              title="Earrings"
              numberOfItems={32}
              height={60}
              path="images/accessories/earrings"
              selectedPath={earringsPath}
              onClick={setEarringsPath}
            />
            <PartList
              title="Glasses"
              numberOfItems={17}
              height={60}
              path="images/accessories/glasses"
              selectedPath={glassesPath}
              onClick={setGlassesPath}
            />
            <PartList
              title="Hats"
              numberOfItems={28}
              height={60}
              path="images/accessories/hats"
              selectedPath={hatPath}
              onClick={setHatPath}
            />
            <PartList
              title="Clothing (L1)"
              numberOfItems={5}
              height={60}
              path="images/clothes/layer_1"
              selectedPath={clothingL1Path}
              onClick={setClothingL1Path}
            />
            <PartList
              title="Clothing (L2)"
              numberOfItems={5}
              height={60}
              path="images/clothes/layer_2"
              selectedPath={clothingL2Path}
              onClick={setClothingL2Path}
            />
            <PartList
              title="Clothing (L3)"
              numberOfItems={9}
              height={60}
              path="images/clothes/layer_3"
              selectedPath={clothingL3Path}
              onClick={setClothingL3Path}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Main;
