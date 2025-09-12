import { useState } from "react";
import type React from "react";
import { fetchJobSuggestions } from "../services/jobService";
import { DigiFormInput, DigiButton } from "@digi/arbetsformedlingen-react";
import type { TypeaheadItem } from "../models/Job";
import { SearchBarInputContainer, SuggestionsContainer, SuggestionItem, SearchBarContainer } from "./styled/JobsPage/SearchBarComponents";

interface SearchBarProps {
  value: string;
  onSearch: (value: string) => void;
  placeholder?: string;
}
//
export function SearchBar ({ value, onSearch, placeholder }: SearchBarProps) {
  const [inputValue, setInputValue] = useState(value);
  const [suggestions, setSuggestions] = useState<TypeaheadItem[]>([]);

  // Search with Keyboard Enter
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSearch(inputValue);
      setSuggestions([]);
    }
  };
  // click on suggestion
  const handleSuggestionClick = (suggestion: TypeaheadItem) => {
    setInputValue(suggestion.value);
    setSuggestions([]);
    onSearch(suggestion.value);
  };
  // Click on search Button
  const handleSearchClick = () => {
    onSearch(inputValue);
    setSuggestions([]);
  };

  return (
    <SearchBarContainer>
      <SearchBarInputContainer>
        <DigiFormInput
          className="SearchInput"
          afLabel={placeholder || "Sök"}
          afId="search-bar"
          afRequired={false}
          value={inputValue}
          // update input value and fetch suggestions
          onInput={(e: React.SyntheticEvent) => {
            const target = e.target as EventTarget & { value?: string };
            const val = target.value ?? "";
            setInputValue(val);
            // suggestions only if more than 2 characters
            if (val.length > 2) {
              fetchJobSuggestions(val)
                .then((r) => setSuggestions(r))
                .catch(() => setSuggestions([]));
            } else {
              setSuggestions([]);
            }
          }}
          onKeyDown={handleKeyDown}
        />
        <DigiButton
          afSize="large"
          afVariation="primary"
          afFullWidth={true}
          onClick={handleSearchClick}
          afAriaLabel="Sök"
        >
          Sök
        </DigiButton>
      </SearchBarInputContainer>

      {suggestions.length > 0 && (
        <SuggestionsContainer className="SuggestionsList">
          {suggestions.slice(0, 5).map((sugg, idx) => (
            <SuggestionItem key={idx} onClick={() => handleSuggestionClick(sugg)}>
              {sugg.value} <span>{sugg.found_phase}</span>
            </SuggestionItem>
          ))}
        </SuggestionsContainer>
      )}
    </SearchBarContainer>
  );
}
