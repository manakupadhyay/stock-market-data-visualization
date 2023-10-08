import { useState } from "react";
import { userInput } from "../../../../utils/constants";
import { UserInputKeys } from "../../../../utils/types";
import Button from "./components/button/Button";
import Dropdown from "./components/dropdown/Dropdown";

interface Props {
  fetchData: (instrument: string, period: string) => void;
}
const Search = ({ fetchData }: Props) => {
  const [instrument, setInstrument] = useState("infy");
  const [period, setPeriod] = useState("daily");

  const handleDropDownChange = (type: string, value: string) => {
    if (type === UserInputKeys.INSTRUMENT) setInstrument(value);
    else if (type === UserInputKeys.PERIOD) setPeriod(value);
  };

  const handleFetchData = () => {
    fetchData(instrument, period);
  };

  return (
    <div className="search-container">
      <h4>Search</h4>
      <div className="input-container">
        {Object.keys(userInput)?.map((key) => {
          const inputValue = userInput[key as UserInputKeys];
          return (
            <Dropdown
              key={inputValue.id}
              id={inputValue.id}
              selectedValue={
                inputValue.id === "instrument" ? instrument : period
              }
              displayName={inputValue.displayName}
              dropDownValues={inputValue.values}
              handleDropDownChange={handleDropDownChange}
            />
          );
        })}
        <Button handleFetchData={handleFetchData} />
      </div>
    </div>
  );
};

export default Search;
