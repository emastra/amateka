import './StoryIntro.scss';
import { Link, useParams } from 'react-router-dom';

const StoryIntro = () => {
    return (
        <>
            <main id='story-intro'>
                <div className='intro-image-wrapper'>
                    <img className='intro-top-image' src='/src/assets/images/ann-ann.jpg' alt='placeholder_image' />
                </div>

                <div className='intro-info-wrapper'>
                    <div className='intro-title-wrapper'>
                        <h2>Contemporary World History</h2>
                    </div>
                    <div className='i-wrapper'>
                        <ol>
                            <li>
                                <img className='info-icon' src='/src/assets/svg/info-circle.svg' alt='info' />
                                <span>Lorem ipsum dolor sit.</span>
                            </li>
                            <li>
                                <img className='info-icon' src='/src/assets/svg/info-circle.svg' alt='info' />
                                <span>Lorem ipsum dolor sit amet.</span>
                            </li>
                        </ol>
                    </div>
                    <div className='text-wrapper'>
                        <p>
                            Welcome to the immersive exploration of European recent history, a captivating journey that
                            unravels the intricacies and pivotal moments that have sculpted the continent's contemporary
                            narrative. This interactive experience invites you to traverse the annals of time, where
                            you'll encounter triumphs, challenges, and the ever-evolving tapestry of European
                            civilization.
                        </p>
                        <p>
                            As you embark on this historical odyssey, envision the landscapes transformed by the echoes
                            of events that reverberate across borders and through generations. Europe, with its diverse
                            cultures, languages, and histories, has been a crucible for change, a stage where the forces
                            of progress and tradition intertwine in a complex dance.
                        </p>
                        <p>
                            Our narrative begins with a glance at the overarching forces that have shaped Europe in
                            recent decades. From the geopolitical realignments of the Cold War to the collaborative
                            aspirations of the European Union, the introduction sets the stage for a multifaceted
                            exploration of a continent in constant motion.
                        </p>
                        <p>
                            Step into the shoes of the people who witnessed the fall of the Berlin Wall, the signing of
                            pivotal treaties, and the expansion of the European Union. Engage with the spirit of the
                            1980s, a time of winds of change that swept through the continent, and navigate the
                            challenges and triumphs of subsequent decades.
                        </p>
                    </div>
                    {/* controlla la 2a var dal default scelto */}
                    <div className='enter-btn-wrapper'>
                        <Link to={`/story/${'1'}/${'years'}`} className='enter-btn'>
                            Entra
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
};

export default StoryIntro;
