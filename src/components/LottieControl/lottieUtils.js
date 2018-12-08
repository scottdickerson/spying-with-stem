import path from "path";

export const updateImagePaths = (animationData, imageMap) => {
  const updatedAnimationData = { ...animationData };
  updatedAnimationData.assets = updatedAnimationData.assets.map(asset => {
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
  return updatedAnimationData;
};
