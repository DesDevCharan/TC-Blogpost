import { useContext } from 'react';
import { BannerContext } from '../../../App';

import './Banner.scss';

function Banner(props) {
    const { banner } = useContext(BannerContext);
    const { alt } = props;
    return (
        <div className="row banner">
            <img src={banner} alt={alt} className="logo" />
        </div>
    );
}

export default Banner;
