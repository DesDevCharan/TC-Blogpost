import { HelmetProvider, Helmet } from 'react-helmet-async';

function Seo(props) {
    const { title, children } = props;
    return (
        <HelmetProvider>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={title} />
            </Helmet>
            {children}
        </HelmetProvider>
    );
}

export default Seo;
