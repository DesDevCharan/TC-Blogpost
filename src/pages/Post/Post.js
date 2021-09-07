import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { BannerContext } from '../../App';
import { getPostBySlug } from '../../api/requests';
import { Profile, Seo } from '../../components/shared';
import { caps } from '../../utils/util';

import './Post.scss';

function Post() {
    const { setBanner } = useContext(BannerContext);
    const { slug } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [post, setPost] = useState(null);

    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        setIsLoading(true);
        slug ? getPostBySlug(slug)
            .then(response => {
                setIsLoading(false);
                setPost(response);
                setBanner(response.featured_image);
            })
            .catch(error => console.log(error)) : setIsLoading(false);
    }, []);
    return (
        <Seo title={post?.title}>
            {isLoading && <p>Wait I'm Loading your post</p>}
            {!slug && <p>No Post has been selected</p>}
            {!isLoading && post && <div className="post-content">
                <h4 className="post-title">{caps(post?.title.toLowerCase())}</h4>
                <Profile name={post?.author?.name} date={post?.date} avatar={post?.author?.avatar_URL} />
                <div dangerouslySetInnerHTML={{ __html: post?.content }} />
            </div>}
        </Seo>
    );
}

export default Post;
