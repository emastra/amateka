import './TimelineCard.scss';

import CardSmall from './variants/CardSmall/CardSmall';

interface TimelineCardProps {
    variant: 'small' | 'medium' | 'large';
}

const TimelineCard: React.FC<TimelineCardProps> = ({ variant }) => {
    let CurrentComponent: React.FC<{ test?: string }> | null = null;

    switch (variant) {
        case 'small':
            CurrentComponent = CardSmall;
            break;
        case 'medium':
            CurrentComponent = null;
            break;
        case 'large':
            CurrentComponent = null;
            break;
        default:
            CurrentComponent = null;
            break;
    }

    return CurrentComponent ? <CurrentComponent /> : null;
};

export default TimelineCard;
