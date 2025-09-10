import { useState } from "react";

interface SearchBarProps {
    value: string;
    onSearch: (value: string) => void;
    placeholder?: string;
}

export function SearchBar({ value, onSearch, placeholder}: SearchBarProps){
    const [inputValue, setInputValue] = useState(value);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const handleSearchClick = () => {
        onSearch(inputValue);
    }
    return(
        <>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder={placeholder}>
            </input>

            <button onClick={handleSearchClick}>Sök</button>

        </>
       
        
    )
}