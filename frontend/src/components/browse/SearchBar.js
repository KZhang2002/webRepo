import { InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { FilterList } from "@mui/icons-material";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <TextField
      id="search"
      type="search"
      placeholder="Search Listings..."
      value={searchTerm}
      onClick={() => {setIsSearching(true)}}
      onBlur={() => setIsSearching(false)}
      variant="outlined"
      onChange={handleChange}

      sx={{ width: "100%", background: "#cecece", border: "none", borderRadius: 1, zIndex: 0 }}
      InputProps={{
        style: {paddingLeft: !isSearching && searchTerm === "" ?"1.5rem":"2rem"},
        startAdornment: !isSearching && searchTerm === "" ? (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ) : (<></>),

        endAdornment: (
          <InputAdornment position="end" style={{paddingRight: "1rem"}}>
            <FilterList />
          </InputAdornment>
        ),
      }}
    />
  );
}