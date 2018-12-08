import path from "path";

export const updateImagePaths = (animationData, imageMap) => {
  if (!animationData.assets) {
    return animationData;
  }
  animationData.assets = animationData.assets.map(asset => {
    const matchingImage = imageMap.find(image => image.name === asset.p);
    if (!matchingImage) {
      return asset;
    }
    const imagePath = matchingImage.path;
    return {
      ...asset,
      p: path.basename(imagePath),
      u: path.dirname(imagePath) + path.sep
    };
  });
  return animationData;
};
