import React from 'react';
import { defaultPosts } from "../../../data/posts.js";
import AllPosts from "../../../components/post/AllPosts.jsx";

function AllPost(props) {
    return (
        <AllPosts posts={defaultPosts} />
    );
}

export default AllPost;