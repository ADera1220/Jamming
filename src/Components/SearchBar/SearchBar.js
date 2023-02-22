// Import React library
import React from 'react';
// Import styles
import './Searchbar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        // Binds the Component methods
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    // Calls the search method passed as a prop from the "App" Component
    search(term) {

    }

    // Handles any change in the tect input field of the "SearchBar" Component
    handleTermChange(e) {

    }

    render() {
        return (
            <div className='SearchBar'>
                <input 
                    placeholder='Enter A Song, Album, or Artist'
                    onChange={this.handleTermChange}
                />
                <button className='SearchButton'>SEARCH</button>
            </div>
        )
    }
}

export default SearchBar;