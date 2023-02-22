// Import React library
import React from 'react';
// Import styles
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        // Binds the Component methods
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    // Calls the search method passed as a prop from the "App" Component
    search(term) {
        /*
            This method uses the onSearch prop to send the term in the input field up
            to the seach() method in the App Component. this method executes any time the
            value of the Searchbar's input field is changed.
        */
       this.props.onSearch(term);
    }

    // Handles any change in the tect input field of the "SearchBar" Component
    handleTermChange(e) {
        /*
            If there is any change the the value of the SearchBar's input field
            the updated value in the field is used on the search() method above.
        */
       this.search(e.target.value);
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