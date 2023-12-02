import { useRef, useEffect } from 'react';
import './SearchBar.scss';

const SearchBar = ({ toggleSortMenu, toggleFilterMenu }) => {
    return (
        <div id='searchbar'>
            <div className='search-input-wrapper'>
                <input type='text' className='search-input' placeholder='Search...' />
            </div>

            <div className='controls-wrapper'>
                <div className='sort-icon-wrapper' onClick={toggleSortMenu}>
                    <img className='sort-icon' src='/src/assets/svg/sort.svg' alt='sort' />
                    <div className='control-label'>sort</div>
                </div>
                <div className='filters-icon-wrapper' onClick={toggleFilterMenu}>
                    <img className='filters-icon' src='/src/assets/svg/filter2.svg' alt='filter' />
                    <div className='control-label'>filter</div>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
