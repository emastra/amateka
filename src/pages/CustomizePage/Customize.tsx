import { useState, useEffect } from 'react';
import { HexColorPicker, HexColorInput } from 'react-colorful';
import './Customize.scss';

const CustomizePage = () => {
    const [color, setColor] = useState('#aabbcc');
    const [selectedVar, setSelectedVar] = useState('color-primary-0');

    const handleRadioChange = (event) => {
        setSelectedVar(event.target.value);
    };

    let root = document.documentElement;

    useEffect(() => {
        root.style.setProperty(`--${selectedVar}`, color);
    }, [color]);

    return (
        <main id='customize'>
            <div className='container'>
                <div className='var-selection-wrapper'>
                    <label>
                        color-primary-0
                        <input
                            type='radio'
                            name='varselection'
                            value='color-primary-0'
                            checked={selectedVar === 'color-primary-0'}
                            onChange={handleRadioChange}
                        />
                    </label>
                    <label>
                        color-primary-2
                        <input
                            type='radio'
                            name='varselection'
                            value='color-primary-2'
                            checked={selectedVar === 'color-primary-2'}
                            onChange={handleRadioChange}
                        />
                    </label>
                    <label>
                        color-primary-4
                        <input
                            type='radio'
                            name='varselection'
                            value='color-primary-4'
                            checked={selectedVar === 'color-primary-4'}
                            onChange={handleRadioChange}
                        />
                    </label>
                </div>

                <div className='picker-wrapper'>
                    <HexColorPicker color={color} onChange={setColor} />
                    <HexColorInput color={color} onChange={setColor} />
                </div>
            </div>
        </main>
    );
};

export default CustomizePage;
