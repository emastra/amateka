import useStoryContext from '../../hooks/useStoryContext';

const StoryContainer = () => {
    const storyData = useStoryContext();
    console.log('##!! storyData:', storyData);

    return <>StoryContainer</>;
};

export default StoryContainer;
