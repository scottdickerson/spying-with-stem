import LottieControl from "../LottieControl";
import * as animationData from "../testanimations/morse-code.json";
import { ANIMATION_ACTIONS } from "../../../constants/constants";

export default [
  {
    component: LottieControl,
    name: "default",
    props: {
      animationData
    }
  },
  {
    component: LottieControl,
    name: "with built in pauses",
    props: {
      animationData,
      actions: [
        { frame: 10, action: ANIMATION_ACTIONS.PAUSE },
        { frame: 20, action: ANIMATION_ACTIONS.PAUSE },
        { frame: 30, action: ANIMATION_ACTIONS.PAUSE },
        { frame: 40, action: ANIMATION_ACTIONS.PAUSE }
      ]
    }
  }
];
