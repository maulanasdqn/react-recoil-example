import { atom, selector } from "recoil";
import { CountWord, ReverseWord } from "../utilities/helper";

export const stateWord = atom({
  key: "state-word",
  default: "",
});

export const reverseWord = selector({
  key: "reverse-word",
  get: ({ get }) => ReverseWord(get(stateWord)),
});

export const countWord = selector({
  key: "count-word",
  get: ({ get }) => CountWord(get(stateWord)),
});
