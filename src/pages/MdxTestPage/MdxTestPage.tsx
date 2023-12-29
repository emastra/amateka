import { useState, useEffect } from 'react';

const MdxTestPage = () => {
    const [mdxContent, setMDXContent] = useState<any>(null);

    useEffect(() => {
        import('../../components/MdxArticle/MdxArticle.mdx')
            .then((module) => {
                setMDXContent(module);
            })
            .catch((error) => {
                console.error('Error loading MDX file:', error);
            });
    }, []);

    return <div>{mdxContent ? <mdxContent.default components={{}} /> : <p>Loading MDX content...</p>}</div>;
};

export default MdxTestPage;
