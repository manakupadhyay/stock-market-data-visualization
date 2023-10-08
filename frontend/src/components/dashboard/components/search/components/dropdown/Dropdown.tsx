import { DropdownValue } from "../../../../../../utils/types";

interface Props {
  id: string;
  displayName: string;
  selectedValue: string;
  dropDownValues: DropdownValue[];
  handleDropDownChange: (type: string, value: string) => void;
}

const Dropdown = (props: Props) => {
  const {
    id,
    selectedValue,
    displayName,
    dropDownValues,
    handleDropDownChange,
  } = props;
  return (
    <div className="dropdown">
      <label htmlFor={id}>{displayName}:</label>
      <select
        id={id}
        value={selectedValue}
        onChange={(e) => handleDropDownChange(id, e.target.value)}
      >
        {dropDownValues.map((value) => {
          return (
            <option key={value.value} value={value.value}>
              {value.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Dropdown;
