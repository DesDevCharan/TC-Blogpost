import { format } from 'timeago.js';

import { Dot } from '../';
import logo from '../../../assets/images/header.jpg';
import { caps, colorGenerate } from '../../../utils/util';

import './Card.scss';

function Card(props) {
    const { post } = props;
    const { post_thumbnail, title, date, categories } = post;
    return (
        <div className="card">
            <div className="container dot-grid">
                {Object.keys(categories).slice(0,2).map(cat => <h6 className="card-label"><Dot color={colorGenerate()} /><span>{categories[cat].name}</span></h6>)}
                {/* <h6 className="card-label"><Dot color={colorGenerate()} /><span>{categories[Object.keys(categories)[0]].name}</span></h6> */}
            </div>
            <img src={post_thumbnail?.URL || logo} alt="Avatar" className="card-img" />
            <div className="container">
                <h4 className="card-title"><b>{caps(title.toLowerCase())}</b></h4>
                <p className="card-date">{format(date, 'en_US')}</p>
            </div>
        </div>
    )
}

export default Card;