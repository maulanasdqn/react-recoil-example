import { stateWord } from "../../store";
import { useRecoilState } from "recoil";
import TextField from "../../components/TextField";

const Form = () => {
  const [word, setWord] = useRecoilState(stateWord);
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex gap-x-4">
      <TextField
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="Masukkan Nama Anda"
      />
    </form>
  );
};

export default Form;
