type T = {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  placeholder: string;
};

const TextField = (p: T) => (
  <input
    type="text"
    className="outline-none focus:outline-none border-2 border-blue-400 rounded-lg w-auto h-auto p-4"
    onChange={p.onChange}
    placeholder={p.placeholder}
    value={p.value}
  />
);

export default TextField;
