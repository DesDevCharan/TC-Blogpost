import { Link } from 'react-router-dom';
import logo from '../../../assets/logotype/truecaller.svg'

import './Header.scss';

function Header() {
    return (
        <div className="row header">
            <Link to='/'><img src={logo} alt="TrueCaller"  className="logo"/></Link>
        </div>
    );
}

export default Header;
