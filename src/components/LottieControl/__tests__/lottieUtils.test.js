import { updateImagePaths } from "../lottieUtils";
import animationData from "../testanimations/Cypher_Main.json";

describe("lottieUtils", () => {
  test("updateImagePath", () => {
    const updatedAnimation = updateImagePaths(animationData, [
      { name: "img_0.png", path: "/static/images/img_0.hash.png" }
    ]);
    expect(updatedAnimation.assets[0].u).toEqual("/static/images");
    expect(updatedAnimation.assets[0].p).toEqual("img_0.hash.png");
  });
});
