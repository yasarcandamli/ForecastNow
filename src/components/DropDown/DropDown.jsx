import { cityOptions } from "../../data/CityOptions";

function DropDown({ onSelect }) {
    return (
        <select className="city-options" onChange={(e) => onSelect(e.target.value)}>
            {cityOptions.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
}

export default DropDown;