import * as React from 'react';
import Layout from '../сcomponent/Layout';
import {StaticImage} from 'gatsby-plugin-image';

const IndexPage = () => {
    return (
        <Layout pageTitle="Home page">
            <p>I'm making this by following the Gatsby Tutorial.</p>
            <StaticImage
                alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
                src="../images/clifford.webp"
            />
        </Layout>
    );
};

export default IndexPage;