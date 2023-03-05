const generateRandom = (min, max) => {
  // find diff
  let difference = max - min;

  // generate random number
  let rand = Math.random();

  // multiply with difference
  rand = Math.floor(rand * difference);

  // add with min value
  rand = rand + min;
  return rand;
};

export const randomImages = (part) => {
  switch (part) {
    case "body":
      return generateRandom(1, 17);
    case "eyes":
      return generateRandom(1, 24);
    case "hair":
      return generateRandom(1, 73);
    case "neckWear":
      return generateRandom(1, 18);
    case "mouth":
      return generateRandom(1, 24);
    case "eyebrows":
      return generateRandom(1, 15);
    case "earrings":
      return generateRandom(1, 32);
    case "glasses":
      return generateRandom(1, 17);
    case "hats":
      return generateRandom(1, 28);
    case "clothingL1":
      return generateRandom(1, 5);
    case "clothingL2":
      return generateRandom(1, 5);
    case "clothingL3":
      return generateRandom(1, 9);
    default:
      return 0;
  }
};
