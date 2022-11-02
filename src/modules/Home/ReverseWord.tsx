import HeaderText from "../../components/HeaderText";
import { reverseWord } from "../../store/index";
import { useRecoilValue } from "recoil";

const ReverseWord = () => {
  const word = useRecoilValue(reverseWord);
  return <HeaderText>Reverse Word : {word}</HeaderText>;
};

export default ReverseWord;
