import { useState } from "react";
import { fetchJobSuggestions } from "../services/ApiFetch";

interface SearchBarProps {
  value: string;
  onSearch: (value: string) => void;
  placeholder?: string;
}

export function SearchBar({ value, onSearch, placeholder }: SearchBarProps) {
  const [inputValue, setInputValue] = useState(value);
  const [suggestions, setSuggestions] = useState<any[]>([]);

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    if (newValue.length > 1) {
      try {
        const result = await fetchJobSuggestions(newValue);
        setSuggestions(result);
        console.log("Suggestion:", result);
      } catch {
        setSuggestions([]);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: any) => {
    setInputValue(suggestion.value);
    setSuggestions([]);
    onSearch(suggestion.value);
  };

  const handleSearchClick = () => {
    onSearch(inputValue);
  };

  return (
    <div className="searchbar-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
      <button onClick={handleSearchClick}>Sök</button>
      {suggestions.length > 0 && (
        <ul className="SuggestionsList">
          {suggestions.map((sugg, idx) => (
            <li key={idx} onClick={() => handleSuggestionClick(sugg)}>
              {sugg.value}{" "}
              <span style={{ color: "#888" }}>{sugg.found_phase}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
