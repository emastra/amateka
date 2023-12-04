import { useState } from 'react';
import './ColorMenu.scss';
import useArticleMenusContext from '../../hooks/useArticleMenusContext';

const ColorMenu = () => {
    const { toggleColorMenu } = useArticleMenusContext();
    return (
        <div id='colormenu'>
            <div className='closing-handle-wrapper'>
                <div className='closing-handle' onClick={toggleColorMenu}></div>
            </div>
            <div className='secondary-menu-title'>Ordina per</div>
            <div className=''>test</div>
        </div>
    );
};

export default ColorMenu;
