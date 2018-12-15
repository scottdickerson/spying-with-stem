import Telegram from "../Telegram";

export default {
  component: Telegram,
  props: {
    isOpen: true,
    onCloseSite: () => console.log("close telegram")
  }
};
