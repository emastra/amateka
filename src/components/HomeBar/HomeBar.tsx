import './HomeBar.scss';

const HomeBar = () => {
    return (
        <div id='homebar'>
            <div className='search-input-wrapper'>
                <input type='text' className='search-input' placeholder='Search...' />
            </div>

            <div className='controls-wrapper'>
                <div className='sort-icon-wrapper'>
                    <img className='sort-icon' src='/src/assets/svg/sort2.svg' alt='sort' />
                    <div className='control-label'>ordina</div>
                </div>
                <div className='filters-icon-wrapper'>
                    <img className='filters-icon' src='/src/assets/svg/filters2.svg' alt='filters' />
                    <div className='control-label'>filtra</div>
                </div>
            </div>
        </div>
    );
};

export default HomeBar;
