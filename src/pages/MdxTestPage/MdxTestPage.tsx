import MdxArticle from '../../components/MdxArticle/MdxArticle.mdx';
// import MdxArticle from 'http://localhost:5173/src/components/MdxArticle/MdxArticle.mdx';
import React, { useState, useEffect } from 'react';
// import { MDXProvider } from '@mdx-js/react';

const MdxTestPage = () => {
    console.log('!!MdxArticle', MdxArticle);
    // const [MdxArticle, setMDXContent] = useState<any>(null);
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

    // return (
    //     <>
    //         <div>a test div before the mdx article component</div>
    //         {MdxArticle && <MdxArticle components={{}} />}
    //     </>
    // );

    return <div>{mdxContent ? <mdxContent.default components={{}} /> : <p>Loading MDX content...</p>}</div>;
};

export default MdxTestPage;
