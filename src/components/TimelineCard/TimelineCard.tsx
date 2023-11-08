import './TimelineCard.scss';

import CardSmall from './variants/CardSmall/CardSmall';
import CardMedium from './variants/CardMedium/CardMedium';
import CardLarge from './variants/CardLarge/CardLarge';

interface TimelineCardProps {
    variant: 'small' | 'medium' | 'large';
    data: any;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ variant, data }) => {
    if (variant === 'small') {
        return <CardSmall data={data} />;
    }

    if (variant === 'medium') {
        return <CardMedium data={data} />;
    }

    if (variant === 'large') {
        return <CardLarge data={data} />;
    }

    // // return CurrentComponent ? <CurrentComponent /> : null;
    // return <CurrentComponent />;

    return null;
};

export default TimelineCard;
