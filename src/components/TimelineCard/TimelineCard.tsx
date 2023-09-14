import './TimelineCard.scss';

import CardSmall from './variants/CardSmall/CardSmall';
import CardMedium from './variants/CardMedium/CardMedium';
import CardLarge from './variants/CardLarge/CardLarge';

interface TimelineCardProps {
    variant: 'small' | 'medium' | 'large';
}

const TimelineCard: React.FC<TimelineCardProps> = ({ variant }) => {
    let CurrentComponent: React.FC<any> | null = null;

    switch (variant) {
        case 'small':
            CurrentComponent = CardSmall;
            break;
        case 'medium':
            CurrentComponent = CardMedium;
            break;
        case 'large':
            CurrentComponent = CardLarge;
            break;
        default:
            CurrentComponent = null;
            break;
    }

    return CurrentComponent ? <CurrentComponent /> : null;
};

export default TimelineCard;
