import './CreatePage.scss';

import Topbar from '../../components/Topbar/Topbar';

const CreatePage = () => {
    return (
        <>
            <Topbar toggleMainMenu={{}} />
            <main id='create-page'>
                <div>
                    <h1>Tell your stories</h1>
                    <p>
                        Use this form to create a story. You can jump around, edit later, skip some or all images, write
                        long or short texts. When you save, you save a private draft. And when you are ready to share,
                        you can publish the story. Keep it private for you and people you know, or make it public and
                        share it with world, contributing to Amateka.
                    </p>
                </div>

                <div>Control bar</div>

                <div id='form-container'>
                    <h2>Basic Information</h2>
                    <div>
                        <div>
                            <label htmlFor=''>
                                Story title
                                <input type='text' />
                            </label>
                        </div>

                        <div>
                            <label htmlFor=''>
                                Tags
                                <input type='text' />
                            </label>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default CreatePage;
