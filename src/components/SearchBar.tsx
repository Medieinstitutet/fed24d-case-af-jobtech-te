import { useState } from "react";
import type React from "react";
import type { Suggestion } from '../models/ApiResponse';
import { fetchJobSuggestions } from "../services/jobService";
import { DigiFormInput, DigiButton } from "@digi/arbetsformedlingen-react";
import { SearchBarInputContainer, SuggestionsContainer, SuggestionItem, SearchBarContainer, SearchInput, SuggestionsWrapper } from "./styled/JobsPage/SearchBarComponents";

interface SearchBarProps {
  value: string;
  onSearch: (value: string) => void;
  placeholder?: string;
}
export function SearchBar ({ value, onSearch, placeholder }: SearchBarProps) {
  const [inputValue, setInputValue] = useState(value);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // Search with Keyboard Enter
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault(); 
      onSearch(inputValue.trim());
      setSuggestions([]);
    }
  };
  // click on suggestion
  const handleSuggestionClick = (suggestion: Suggestion) => {
    setInputValue(suggestion);
    setSuggestions([]);
    onSearch(suggestion);
  };

  // Click on search Button
  const handleSearchClick = () => {
    onSearch(inputValue.trim());
    setSuggestions([]); // clear suggestions on search
  };

  return (
    <SearchBarContainer>
      <SearchBarInputContainer>
        <SearchInput>
          <DigiFormInput
            className="SearchInput"
            afLabel={placeholder || "Sök"}
            afId="search-bar"
            afRequired={false}
            afAutocomplete='false'
            onInput={(e: React.SyntheticEvent) => {
              const target = e.target as EventTarget & { value?: string };
              const val = (target.value ?? "").trimStart();
              setInputValue(val);
              // suggestions only if more than 2 characters
              if (val.length > 2) {
                fetchJobSuggestions(val)
                  .then(result => setSuggestions(result.suggestions))
                  .catch(() => setSuggestions([]));
              } else {
                setSuggestions([]);
              }
            }}
            onKeyDown={handleKeyDown}
            afValue={inputValue}
          />
        </SearchInput>
        <DigiButton
          afSize="large"
          afVariation="primary"
          afFullWidth
          onClick={handleSearchClick}
          afAriaLabel="Sök"
          afId='searchBtn'
        >
          Sök
        </DigiButton>
      </SearchBarInputContainer>
      {suggestions.length > 0 && (
        <SuggestionsWrapper>
          <SuggestionsContainer className="SuggestionsList">
            {suggestions.slice(0, 5).map((sugg, idx) => (
              <SuggestionItem key={idx} onClick={() => handleSuggestionClick(sugg)}>
                {sugg}
              </SuggestionItem>
            ))}
          </SuggestionsContainer>
        </SuggestionsWrapper>
      )}
    </SearchBarContainer>
  )
};
