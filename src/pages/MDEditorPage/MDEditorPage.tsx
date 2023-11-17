// https://mdxeditor.dev

import './MDEditorPage.scss';
import { useRef } from 'react';
import { MDXEditor } from '@mdxeditor/editor/MDXEditor';
import { MDXEditorMethods } from '@mdxeditor/editor';
import '@mdxeditor/editor/style.css';

import { UndoRedo } from '@mdxeditor/editor/plugins/toolbar/components/UndoRedo';
import { BlockTypeSelect } from '@mdxeditor/editor/plugins/toolbar/components/BlockTypeSelect';
import { BoldItalicUnderlineToggles } from '@mdxeditor/editor/plugins/toolbar/components/BoldItalicUnderlineToggles';
import { CreateLink } from '@mdxeditor/editor/plugins/toolbar/components/CreateLink';
import { DiffSourceToggleWrapper } from '@mdxeditor/editor/plugins/toolbar/components/DiffSourceToggleWrapper';
import { InsertImage } from '@mdxeditor/editor/plugins/toolbar/components/InsertImage';
import { InsertThematicBreak } from '@mdxeditor/editor/plugins/toolbar/components/InsertThematicBreak';
import { ListsToggle } from '@mdxeditor/editor/plugins/toolbar/components/ListsToggle';
import { Separator } from '@mdxeditor/editor';

import { toolbarPlugin } from '@mdxeditor/editor/plugins/toolbar';
import { headingsPlugin } from '@mdxeditor/editor/plugins/headings';
import { quotePlugin } from '@mdxeditor/editor/plugins/quote';
import { linkDialogPlugin } from '@mdxeditor/editor';
import { linkPlugin } from '@mdxeditor/editor';
import { diffSourcePlugin } from '@mdxeditor/editor';
import { imagePlugin } from '@mdxeditor/editor';
import { thematicBreakPlugin } from '@mdxeditor/editor/plugins/thematic-break';
import { listsPlugin } from '@mdxeditor/editor/plugins/lists';
import { markdownShortcutPlugin } from '@mdxeditor/editor';

const MDEditorPage = () => {
    // construct a ref to the editor
    const ref = useRef<MDXEditorMethods>(null);

    return (
        <main id='mdeditor-page'>
            <button onClick={() => ref.current?.setMarkdown('new markdown')}>Set new markdown</button>
            <button onClick={() => console.log(ref.current?.getMarkdown())}>Get markdown</button>
            <MDXEditor
                ref={ref}
                onChange={console.log}
                markdown='# Hello world'
                plugins={[
                    headingsPlugin(),
                    quotePlugin(),
                    linkDialogPlugin(),
                    linkPlugin(),
                    imagePlugin(),
                    thematicBreakPlugin(),
                    listsPlugin(),
                    markdownShortcutPlugin(),
                    // the viewMode parameter lets you switch the editor to diff or source mode.
                    // you can get the diffMarkdown from your backend and pass it here.
                    diffSourcePlugin({ diffMarkdown: 'An older version', viewMode: 'rich-text' }),

                    toolbarPlugin({
                        toolbarContents: () => (
                            <DiffSourceToggleWrapper>
                                <UndoRedo />
                                <Separator />
                                <BlockTypeSelect />
                                <Separator />
                                <CreateLink />
                                <InsertImage />
                                <Separator />
                                <BoldItalicUnderlineToggles />
                                <Separator />
                                <ListsToggle />
                                <Separator />
                                <InsertThematicBreak />
                            </DiffSourceToggleWrapper>
                        ),
                    }),
                ]}
            />
        </main>
    );
};

export default MDEditorPage;
