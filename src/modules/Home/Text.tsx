import { Suspense } from "react";
import { useRecoilValue } from "recoil";
import { stateWord } from "../../store";
import HeaderText from "../../components/HeaderText";
import ReverseWord from "./ReverseWord";
import CountWord from "./CountWord";

const Text = () => {
  const word = useRecoilValue(stateWord);
  return (
    <section className="flex flex-col gap-y-2">
      <HeaderText>Original Word : {word}</HeaderText>
      <Suspense fallback="Wait..">
        <ReverseWord />
      </Suspense>
      <Suspense fallback="Wait..">
        <CountWord />
      </Suspense>
    </section>
  );
};

export default Text;
