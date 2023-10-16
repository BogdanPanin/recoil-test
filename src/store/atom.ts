import { atom, selector } from "recoil";

export const changeText = atom({
  key: "changeText",
  default: "",
});

export const clickCounter = atom({
  key: "clickCounter",
  default: 0,
});

export const sizeImage = selector({
  key: "sizeImage",
  get: ({ get }) => {
    const size = get(clickCounter);
    return size * 20;
  },
});

export const setColor = atom({
  key: "setColor",
  default: "white",
});

export const charCountState = selector({
  key: "charCountState",
  get: ({ get }) => {
    const text = get(changeText);

    return text.replace(/\s/g, "").length;
  },
});
