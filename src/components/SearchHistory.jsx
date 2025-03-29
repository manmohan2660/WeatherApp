import React from "react";
import "./SearchHistory.css"; 

export default function SearchHistory({ history, onSelectCity }) {
  return (
    <div className="search-history">
      <h3 className="history-title">Recent Searches</h3>
      <div className="history-buttons">
        {history.map((item, index) => (
          <button key={index} className="history-button" onClick={() => onSelectCity(item)}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
