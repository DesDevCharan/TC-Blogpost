import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Card, Pagination, Category } from '../../components/shared';
import { BannerContext, PostContext } from '../../App';
import { getPosts, NO_OF_POSTS } from '../../api/requests';
import logo from '../../assets/images/header.jpg';

import './Home.scss';

function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [size, setSize] = useState(1);
    const { setBanner } = useContext(BannerContext);
    const { posts, setPosts, page, setPage, category } = useContext(PostContext);

    const onClickPage = (val) => {
        setPage(Number(val));
    };

    const loadPosts = (page, category) => {
        setIsLoading(true);
        getPosts(page, category)
            .then(response => {
                setIsLoading(false);
                setPosts(response.posts);
                setSize(Math.ceil(response.found / NO_OF_POSTS))
            })
            .catch(error => console.log(error));
    };

    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        setBanner(logo);
    }, []);

    useEffect(() => {
        loadPosts(page, category);
    }, [page, category]);

    return (
        <>
            <h4 className="home-title">Latest articles</h4>
            <Category />
            <div className="grid">
                {isLoading && <p>Wait I'm Loading posts for you</p>}
                {!isLoading && posts.map((post) => (
                    <Link className='card-link' to={`/post${post.slug}`} key={post.slug}><Card post={post} /></Link>
                ))}
            </div>
            {size > 1 && <Pagination
                active={page}
                size={size}
                step={2}
                onClickHandler={onClickPage}
            />}
        </>
    );
}

export default Home;
