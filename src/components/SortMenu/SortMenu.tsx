import { Link } from 'react-router-dom';
import './SortMenu.scss';

const SortMenu = () => {
    const options = [];

    return (
        <div id='sortmenu'>
            <div className='closing-handle-wrapper'>
                <div className='closing-handle'></div>
            </div>
            <div className='secondary-menu-title'>Ordina per</div>
            <div className='sort-options-wrapper'>
                <div className='sort-option'>
                    <label>Option name 1</label>
                    {/* checked={topping === 'Regular'} */}
                    <input type='radio' name='sortingBy' value='unnomeee' />
                </div>
            </div>
        </div>
    );
};

export default SortMenu;
