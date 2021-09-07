import { nthDate } from '../../../utils/util';

import './Profile.scss';

function Profile(props) {
    const { avatar, name, date } = props;
    return (
        <div className="profile">
            <div className="avatar">
                <img src={avatar} alt={name} className="logo" />
            </div>
            <div className="info">
                <div className="name">{name}</div>
                <div className="date" > {nthDate(date)}</div>
            </div>
        </div>
    );
}

export default Profile;
