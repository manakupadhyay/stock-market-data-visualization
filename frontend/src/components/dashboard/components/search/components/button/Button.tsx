interface Props {
  handleFetchData: () => void;
}
const Button = ({ handleFetchData }: Props) => {
  return (
    <div>
      <button onClick={() => handleFetchData()}>Fetch Data</button>
    </div>
  );
};

export default Button;
