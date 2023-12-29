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

    useEffect(() => {
        const { firestore } = getFirebase();
        const articleRef = doc(firestore, 'mdxArticles', 'EYevwbpJSstn13INOgFS');

        getDoc(articleRef).then((snapshot) => {
            console.log('snapshot', snapshot.data()!.content);
            setMdxContent(snapshot.data()!.content);
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
