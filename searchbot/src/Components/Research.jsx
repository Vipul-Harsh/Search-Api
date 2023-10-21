import React, { useState } from "react";
import axios from "axios";
import "./Research.css";
import SearchIcon from "@mui/icons-material/Search";
import NavBar from "./NavBar";

const Research = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = async () => {
    try {
      const response = await axios.post("http://localhost:8080/search", {
        keyword: query,
        limit: 10,
      });

      const searchResults = response.data.data;

      setResults(searchResults);
      setSearched(true);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="contain">
        <div className="box">
          <h1 className="o">QuillBotSearch</h1>
          <div className={`part ${searched ? "searched" : ""}`}>
            <div className="search">
              <div className="se">
                <SearchIcon />
              </div>
              <div className="inp">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search for academic and non-academic material"
                />
              </div>
            </div>
            <button className="but" onClick={handleSearch}>
              Search
            </button>
          </div>
          <div className="results">
            {results.map((result, index) => (
              <div key={index} className="result-box">
                <a href={result.url} target="_blank" rel="noopener noreferrer" className="lik">
                  {result.title}
                </a>
                <p>{result.abstract}</p>
                <button className="see-content-button">See Content</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Research;
