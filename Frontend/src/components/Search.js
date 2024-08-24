import React from 'react';

const Search = () => {
    return (
        <div className="d-flex justify-content-center mb-3">
            <div className="search-container">
                <input
                    type="search"
                    placeholder="Search..."
                    className="form-control p-3"
                />
            </div>
        </div>
    );
}

export default Search;
