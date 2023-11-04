import './BackBar.scss';

const BackBar = () => {
    return (
        <>
            <div id='backbar' className='transparent-variant'>
                <div className='back-wrapper'>
                    <img className='back-icon' src='/src/assets/svg/back-arrow.svg' alt='go-back' />
                </div>

                <div className='interaction-wrapper'>
                    <div className='share-icon-wrapper'>
                        <img className='share-icon' src='/src/assets/svg/share.svg' alt='share' />
                    </div>
                    <div className='favorite-icon-wrapper'>
                        <img className='favorite-icon' src='/src/assets/svg/heart.svg' alt='save' />
                    </div>
                </div>
            </div>
        </>
    );
};

export default BackBar;
