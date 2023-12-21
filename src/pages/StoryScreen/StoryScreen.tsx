import TimelineCard from '../../components/TimelineCard/TimelineCard';

const StoryScreen = ({ sectionName, sections }) => {
    if (!sections) return null;
    console.log('## sections', sections);

    const currentSection = sections.filter((s) => s.id === sectionName)[0];

    if (sectionName === 'events') {
        return (
            <>
                {currentSection.data.map((ev) => (
                    <TimelineCard
                        variant='small'
                        key={ev.id}
                        data={{ date: ev.date, image: ev.image, title: ev.title, tags: ev.tags }}
                    />
                ))}
            </>
        );
    }

    if (sectionName === 'years') {
        return (
            <>
                {currentSection.data.map((year) => (
                    <TimelineCard
                        variant='medium'
                        key={year.id}
                        data={{
                            date: year.date,
                            image: year.image,
                            title: year.title,
                            description: year.intro,
                            tags: year.tags,
                        }}
                    />
                ))}
            </>
        );
    }

    if (sectionName === 'decades') {
        return (
            <>
                {currentSection.data.map((decade) => (
                    <TimelineCard
                        variant='large'
                        key={decade.id}
                        data={{
                            date: decade.date,
                            image: decade.image,
                            title: decade.title,
                            description: decade.intro,
                            tags: decade.tags,
                        }}
                    />
                ))}
            </>
        );
    }

    if (sectionName === 'concepts') {
        return (
            <>
                {currentSection.data.map((concept) => {
                    return <TimelineCard variant='large' key={concept.id} data={concept} />;
                })}
            </>
        );
    }
};

export default StoryScreen;
