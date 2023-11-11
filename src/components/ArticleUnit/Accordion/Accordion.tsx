import React, { useState } from 'react';
import './Accordion.scss';

interface AccordionItem {
    title: string;
    content: string;
}

interface AccordionProps {
    items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        if (index === activeIndex) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <div className='accordion'>
            {items.map((item, index) => (
                <div key={index} className={`accordion-item ${activeIndex === index ? 'active' : ''}`}>
                    <div className='accordion-title' onClick={() => toggleAccordion(index)}>
                        {item.title}
                    </div>
                    <div className='accordion-content'>{item.content}</div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
