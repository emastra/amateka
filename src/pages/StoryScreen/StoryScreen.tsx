import TimelineCard from '../../components/TimelineCard/TimelineCard';

const StoryScreen = ({ sectionName, sections }) => {
    console.log('## sections', sections);
    if (sectionName === 'events') {
        return (
            <>
                {sections &&
                    sections
                        .filter((s) => s.id === 'events')[0]
                        .data.map((ev) => (
                            <TimelineCard
                                variant='small'
                                key={ev.id}
                                data={{ date: ev.date, image: ev.image, title: ev.title, tags: ev.tags }}
                            />
                        ))}
            </>
        );
    }
};

export default StoryScreen;
