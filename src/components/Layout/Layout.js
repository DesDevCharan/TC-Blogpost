import './Layout.scss';
import { Header, Footer, Banner } from '../shared';
import { Redirect, Route, Switch } from 'react-router';
import { Home, Post } from '../../pages';

function Layout() {

    const Content = () => (<div className="row content">
        <Switch>
            <Route exact path="/" component={Home} />
            <Route
                exact
                path="/post:slug"
                render={() => {
                    return <Post />;
                }}
            />
            <Redirect to="/" />
        </Switch>
    </div>);

    return (
        <>
            <Header />
            <Banner alt="Home Logo" />
            {Content()}
            <Footer />
        </>
    );
}

export default Layout;
