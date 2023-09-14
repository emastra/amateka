import './TimelineCard.scss';

import CardSmall from './variants/CardSmall/CardSmall';
import CardMedium from './variants/CardMedium/CardMedium';
import CardLarge from './variants/CardLarge/CardLarge';

interface TimelineCardProps {
    variant: 'small' | 'medium' | 'large';
    data: any;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ variant, data }) => {
    // const TimelineCard = ({ variant, data }) => {

    // let CurrentComponent: any = null;

    // switch (variant) {
    //     case 'small':
    //         CurrentComponent = CardSmall;
    //         break;
    //     case 'medium':
    //         CurrentComponent = CardMedium;
    //         break;
    //     case 'large':
    //         CurrentComponent = CardLarge;
    //         break;
    //     default:
    //         CurrentComponent = null;
    //         break;
    // }

    if (variant === 'small') {
        return <CardSmall data={data} />;
    }

    // // return CurrentComponent ? <CurrentComponent /> : null;
    // return <CurrentComponent />;
};

export default TimelineCard;
