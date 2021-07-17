import React, { useState } from 'react';
import './SearchBar.css';

export default function SearchBar(props) {
    const [search, setSearch] =useState({
        'term': '',
        'location': '',
        'sortBy': 'best_match'
    });

    const sortByOptions = {
        'Best Match': 'best_match',
        'Highest Rated': 'rating',
        'Most Reviewed': 'review_count',
    }

    const handleSortByChange = (optionValue) => {
        let temp = {...search};
        temp.sortBy = optionValue;
        setSearch(temp);
    }

    const handleTermChange = (e) => {
        let temp = {...search};
        temp.term = e.target.value;
        setSearch(temp);
    }

    const handleLocationChange = (e) => {
        let temp = {...search};
        temp.location = e.target.value;
        setSearch(temp);
    }

    const handleSearch = (e) => {
        props.searchYelp(search.term, search.location, search.sortBy);
        e.preventDefault();
    }

    const getSortByClass = (optionValue) => {
        if (search.sortBy === optionValue) {
            return 'active';
        } else {
            return '';
        }
    }

    return (
        <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                    {Object.keys(sortByOptions).map(option => {
                    let sortByOptionValue = sortByOptions[option];
                    return <li className={getSortByClass(sortByOptionValue)} key={sortByOptionValue} onClick={() => handleSortByChange(sortByOptionValue)}>{option}</li>
                    })}
                </ul>
            </div>
            <div className="SearchBar-fields">
                <input placeholder="Search Businesses" onChange={(e) => handleTermChange(e)}/>
                <input placeholder="Where?" onChange={(e) => handleLocationChange(e)}/>
            </div>
            <div className="SearchBar-submit">
                <a onClick={(e) => handleSearch(e)}>Let's Go</a>
            </div>
      </div>
    )
}

