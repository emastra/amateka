import { useState } from 'react';
import './SortMenu.scss';

const options = ['Default', 'Option name 1', 'Option name 2', 'Option name 3', 'Option name 4', 'Option name 5'];

const SortMenu = () => {
    const [selectedOpt, setselectedOpt] = useState(options[0]);

    const handleRadioChange = (event) => {
        setselectedOpt(event.target.value);
    };

    return (
        <div id='sortmenu'>
            <div className='closing-handle-wrapper'>
                <div className='closing-handle'></div>
            </div>
            <div className='secondary-menu-title'>Ordina per</div>
            <div className='sort-options-wrapper'>
                {options.map((option) => (
                    <div className='sort-option'>
                        <label>
                            {option}
                            <input
                                type='radio'
                                name='sortingBy'
                                value={option}
                                checked={selectedOpt === option}
                                onChange={handleRadioChange}
                            />
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SortMenu;
