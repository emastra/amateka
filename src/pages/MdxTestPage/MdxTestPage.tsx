// import { useState, useEffect } from 'react';

// const MdxTestPage = () => {
//     const [mdxContent, setMDXContent] = useState<any>(null);

//     useEffect(() => {
//         import('../../components/MdxArticle/MdxArticle.mdx')
//             .then((module) => {
//                 setMDXContent(module);
//             })
//             .catch((error) => {
//                 console.error('Error loading MDX file:', error);
//             });
//     }, []);

//     return <div>{mdxContent ? <mdxContent.default components={{}} /> : <p>Loading MDX content...</p>}</div>;
// };

// export default MdxTestPage;

//

// import { useState, useEffect } from 'react';
// import { compileMdx } from './mdxUtils';

// import { getFirebase } from '../../firebase';
// import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
// import { compileSync, runSync } from '@mdx-js/mdx';
// import * as runtime from 'react/jsx-runtime';

// const MdxTestPage = () => {
//     const [mdxContent, setMDXContent] = useState<any>(null);

//     useEffect(() => {
//         const { firestore } = getFirebase();
//         const articleRef = doc(firestore, 'mdxArticles', 'EYevwbpJSstn13INOgFS');

//         getDoc(articleRef).then((snapshot) => {
//             console.log('snapshot', snapshot);
//             const compiledMdx = compileSync(snapshot.data() as any);
//             console.log('compiledMdx', compiledMdx);

//             runSync(compiledMdx.value, {...runtime, baseUrl: import.meta.url})

//         });

//         // import('../../components/MdxArticle/MdxArticle.mdx')
//         //     .then((module) => {
//         //         setMDXContent(module);
//         //     })
//         //     .catch((error) => {
//         //         console.error('Error loading MDX file:', error);
//         //     });
//     }, []);

//     // return <div>{mdxContent ? <mdxContent.default components={{}} /> : <p>Loading MDX content...</p>}</div>;
//     return null;
// };

// export default MdxTestPage;

//

// import React, { useState, useEffect } from 'react';
// import { compileMdx } from './mdxUtils';
// import { evaluate } from '@mdx-js/mdx';
// import { VFile } from 'vfile';

// import { getFirebase } from '../../firebase';
// import { doc, getDoc, collection, getDocs } from 'firebase/firestore';

// const MdxTestPage = () => {
//     const [mdxContent, setMdxContent] = useState<any>(null);
//     const [compiledMdx, setCompiledMdx] = useState<any>(null);

//     useEffect(() => {
//         const { firestore } = getFirebase();
//         const articleRef = doc(firestore, 'mdxArticles', 'EYevwbpJSstn13INOgFS');

//         getDoc(articleRef).then((snapshot) => {
//             console.log('snapshot', snapshot.data()!.content);
//             setMdxContent('# Hello, World! This is a simple MDX example.');
//         });
//     }, []);

//     useEffect(() => {
//         console.log('mdxContent', mdxContent);
//         if (!mdxContent) return;

//         const renderMdx = async () => {
//             try {
//                 const code = await compileMdx(mdxContent);
//                 console.log('code', code);
//                 // const vfile = new VFile({ path: 'example.mdx', value: code });
//                 const options = {
//                     remarkPlugins: [], // An array of remark plugins
//                     rehypePlugins: [], // An array of rehype plugins
//                     jsx: React.createElement, // Provide React.createElement for the jsx option
//                     jsxs: React.createElement, // Provide React.createElement for the jsxs option
//                     Fragment: React.Fragment, // Include React.Fragment for the Fragment property
//                     // ... other options as needed
//                 };
//                 const result = await evaluate(code, options);
//                 console.log('result', result);
//                 setCompiledMdx(result.default);
//             } catch (error) {
//                 console.error('Error compiling MDX:', error);
//             }
//         };

//         renderMdx();
//     }, [mdxContent]);

//     return <div>{compiledMdx}</div>;
// };

// export default MdxTestPage;

//

import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

import { getFirebase } from '../../firebase';
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';

const MarkdownRenderer = () => {
    const [mdxContent, setMdxContent] = useState<any>(null);

    const unescaped = `## 1.1 The World After 1945: A Landscape of Ruins and Rebirth

    As the smoke of World War II cleared, the world in 1945 presented a tableau of devastation and hope, a paradoxical scene where the ruins of old met the seeds of a new era. Europe lay in shreds, its cities reduced to rubble, its people grappling with loss on an unimaginable scale. Asia, too, bore the scars of war, with Japan facing the aftermath of nuclear devastation. Yet, amid this desolation, a collective resolve to rebuild and prevent future conflicts began to take shape, marking the beginning of a significant transformation in global politics, society, and ideology.

    ## The Devastation

    Europe's landscape in the immediate post-war years was a stark testament to the war's ferocity. Cities like Berlin, Warsaw, and London had been heavily bombed, leaving vast swathes of destruction. The economic structures of entire nations were disrupted, leading to widespread poverty and famine. In Asia, the Japanese cities of Hiroshima and Nagasaki emerged as symbols of the war's new, terrifying potential for destruction with the advent of atomic weapons.`;
    // console.log('unescaped:', unescaped);

    // const mdcontent = JSON.stringify(unescaped);
    // console.log('mdcontent:', mdcontent);

    useEffect(() => {
        const { firestore } = getFirebase();
        const articleRef = doc(firestore, 'mdxArticles', 'EYevwbpJSstn13INOgFS');

        getDoc(articleRef).then((snapshot) => {
            console.log('snapshot', snapshot.data()!.content);
            setMdxContent(snapshot.data()!.content.replaceAll(' ', ''));
        });
    }, []);

    return mdxContent && <ReactMarkdown>{mdxContent}</ReactMarkdown>;
};

const MdxTestPage = () => {
    return <MarkdownRenderer />;
};

export default MdxTestPage;

//

// import { MDXProvider } from '@mdx-js/react';

// import React, { useState, useEffect } from 'react';
// import ReactMarkdown from 'react-markdown';
// import { compile } from '@mdx-js/mdx';

// import { getFirebase } from '../../firebase';
// import { doc, getDoc, collection, getDocs } from 'firebase/firestore';

// const MdxTestPage = () => {
//     // const [mdxContent, setMdxContent] = useState<any>(null);
//     const [compiledMdx, setCompiledMdx] = useState<any>(null);

//     useEffect(() => {
//         const { firestore } = getFirebase();
//         const articleRef = doc(firestore, 'mdxArticles', 'EYevwbpJSstn13INOgFS');

//         getDoc(articleRef).then((snapshot) => {
//             // console.log('snapshot', snapshot.data()!.content);
//             // setMdxContent(snapshot.data()!.content);
//             compile(snapshot.data()!.content).then((result) => {
//                 setCompiledMdx(result);
//             });
//         });
//     }, []);

//     if (!compiledMdx) {
//         return null; // or a loading indicator
//     }

//     // Ensure the MDX component is correctly exported
//     const MdxContent = compiledMdx.default;

//     return (
//         <MDXProvider components={{}}>
//             <MdxContent />
//         </MDXProvider>
//     );
// };

// // const MdxTestPage = () => {
// //     return <MarkdownRenderer />;
// // };

// export default MdxTestPage;
