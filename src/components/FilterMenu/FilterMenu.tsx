import { useState } from 'react';
import './FilterMenu.scss';

const options = ['Default', 'Option name 1', 'Option name 2', 'Option name 3', 'Option name 4', 'Option name 5'];

const FilterMenu = () => {
    const [selectedOpt, setselectedOpt] = useState(options[0]);

    const handleRadioChange = (event) => {
        setselectedOpt(event.target.value);
    };

    return (
        <div id='filtermenu'>
            <div className='bar'>
                <div className='back-wrapper'>
                    <img className='back-icon' src='/src/assets/svg/back-arrow.svg' alt='go-back' />
                </div>
                <div className='title'>Filters</div>
                <div className='reset-btn'>Reset</div>
            </div>
            <div>
                <div>test</div>
                <div>test</div>
            </div>
            <div>
                <div>test</div>
                <div>test</div>
            </div>
            <div className='enter-btn-wrapper'>
                <div className='enter-btn'>Show results</div>
            </div>
        </div>
    );
};

export default FilterMenu;
