export const NO_OF_POSTS = 20;

const GET_CATEGORIES = "https://public-api.wordpress.com/rest/v1.1/sites/107403796/categories";

const GET_POSTS = (page, category) => `https://public-api.wordpress.com/rest/v1.1/sites/107403796/posts/?fields=slug,categories,post_thumbnail,title,date&number=${NO_OF_POSTS}&page=${page}&category=${category}`;

const GET_POST_BY_SLUG = (SLUG) => `https://public-api.wordpress.com/rest/v1.1/sites/107403796/posts/slug:${SLUG}?fields=featured_image,title,author,content,date`;

export const getPosts = (page = 1, category) => {
    return fetch(GET_POSTS(page, category), { method: "GET", })
        .then(res => res.json())
}
export const getCategories = () => {
    return fetch(`${GET_CATEGORIES}`, { method: "GET", })
        .then(res => res.json())
}
export const getPostBySlug = (slug = "") => {
    return fetch(GET_POST_BY_SLUG(slug), { method: "GET", })
        .then(res => res.json())
}