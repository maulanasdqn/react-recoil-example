type props = {
  children: string;
  onClick: VoidFunction;
};

const Button = (props: props) => {
  const { onClick, children } = props;
  return (
    <button
      className="text-blue-400 bg-white border-2 border-blue-400 w-auto h-auto p-4 rounded-lg"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
