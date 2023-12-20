import { createContext, useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';

import { getFirebase } from '../firebase';
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';

export const StoryContext = createContext<any>(undefined);

export const StoryProvider = ({ children }) => {
    const { id } = useParams(); // story id
    if (!id) return;

    // const [loading, setLoading] = useState(true);
    const [storyData, setStoryData] = useState<any>(null);

    useEffect(() => {
        const { firestore } = getFirebase();

        const storyRef = doc(firestore, 'stories', id);

        getDoc(storyRef).then((storySnap) => {
            const shallowStoryData = { id: storySnap.id, ...storySnap.data() };

            const eventsCollectionRef = collection(storyRef, 'events');

            getDocs(eventsCollectionRef).then((eventsSnap) => {
                const shallowEventsData = eventsSnap.docs.map((d) => {
                    return { id: d.id, ...d.data() };
                });

                setStoryData({ ...shallowStoryData, sections: shallowEventsData });
            });
        });
    }, []);

    const contextValue = storyData;

    return <StoryContext.Provider value={contextValue}>{children}</StoryContext.Provider>;
};
