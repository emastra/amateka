import { useContext } from 'react';
import { StoryContext } from '../context/StoryContext'; // TODO: importa pure IStoryContext

const useStoryContext = (): any => {
    const context = useContext(StoryContext);

    if (context === undefined) {
        throw new Error('StoryContext must be used within a StoryProvider');
    }

    return context;
};

export default useStoryContext;
