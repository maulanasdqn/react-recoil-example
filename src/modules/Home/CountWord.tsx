import HeaderText from "../../components/HeaderText";
import { countWord } from "../../store/index";
import { useRecoilValue } from "recoil";

const CountWord = () => {
  const word = useRecoilValue(countWord);
  return <HeaderText>Count Word : {word}</HeaderText>;
};

export default CountWord;
