import './Text.scss';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Text = () => {
    return (
        <>
            <div className='text-container'>
                <p>
                    Lorem ipsum <a href=''>dolor</a> sit amet, consectetur adipiscing elit. Fusce ut turpis eget nunc
                    volutpat vulputate quis non nulla. Cras non euismod lorem, ut tincidunt libero. Proin vitae sem
                    suscipit, pharetra nisi ac, sollicitudin augue. Fusce ut turpis eget nunc volutpat vulputate quis
                    non nulla. Cras non euismod lorem, ut tincidunt libero. Proin vitae sem suscipit, pharetra nisi ac,
                    sollicitudin augue.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut turpis eget nunc volutpat
                    vulputate quis non nulla. Cras non euismod lorem, ut tincidunt libero. Proin vitae sem suscipit,
                    pharetra nisi ac, sollicitudin augue.
                </p>
            </div>
        </>
    );
};

export default Text;
