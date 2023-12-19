import './BottomDrawerMenuContainer.scss';
// import useArticleMenusContext from '../../hooks/useArticleMenusContext';

const BottomDrawerMenuContainer = ({ children, ...props }) => {
    // const { toggleColorMenu } = useArticleMenusContext();

    // compound pattern
    // https://chat.openai.com/c/409cd898-9005-4230-9d78-0d7f4b1a5af7 // verso la fine della convo

    return (
        <div id='bottom-drawer-menu-container'>
            <div className='closing-handle-wrapper'>
                {/* onClick={toggleColorMenu} */}
                <div className='closing-handle'></div>
            </div>
            <div className='secondary-menu-title'>Ordina per</div>

            {children}
        </div>
    );
};

export default BottomDrawerMenuContainer;
