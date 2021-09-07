import { createContext, useState } from 'react';

import { Layout } from './components/Layout';
import { Seo } from './components/shared';
import logo from './assets/images/header.jpg';

import './App.scss';

export const BannerContext = createContext(null);
export const PostContext = createContext(null);

function App() {
  const [banner, setBanner] = useState(logo);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("");
  const bannerValue = {
    banner,
    setBanner,
  };
  const postValue = {
    posts, setPosts,
    page, setPage,
    category, setCategory
  }
  return (
    <BannerContext.Provider value={bannerValue}>
      <PostContext.Provider value={postValue}>
        <Seo title="True Caller Blog">
          <div className="app">
            <Layout />
          </div>
        </Seo>
      </PostContext.Provider>
    </BannerContext.Provider>
  );
}

export default App;
