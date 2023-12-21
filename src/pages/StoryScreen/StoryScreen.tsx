import TimelineCard from '../../components/TimelineCard/TimelineCard';

interface IEvent {
    id: string;
    image: string;
    date: string;
    title: string;
    tags: string[];
    content?: any;
    description?: any;
}

interface IYear {
    id: string;
    date: string;
    image: string;
    title: string;
    intro: string;
    tags: string[];
}

interface IDecade {
    id: string;
    date: string;
    image: string;
    title: string;
    intro: string;
    tags: string[];
}

interface IConcept {
    id: string;
    date: string;
    image: string;
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    content: any;
}

const StoryScreen = ({ sectionName, sections }) => {
    if (!sections) return null;
    console.log('## sections', sections);
    const current = sections.filter((s) => s.id === sectionName)[0];

    if (sectionName === 'events') {
        const sectionData: IEvent[] = current.data;

        return (
            <>
                {sectionData.map((ev) => (
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
        const sectionData: IYear[] = current.data;

        return (
            <>
                {sectionData.map((year) => (
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
        const sectionData: IDecade[] = current.data;

        return (
            <>
                {sectionData.map((decade) => (
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
        const sectionData: IConcept[] = current.data;

        return (
            <>
                {sectionData.map((concept) => {
                    return <TimelineCard variant='large' key={concept.id} data={concept} />;
                })}
            </>
        );
    }
};

export default StoryScreen;
