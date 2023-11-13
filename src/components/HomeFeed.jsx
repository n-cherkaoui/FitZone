import { useState, useEffect } from 'react';
import './HomeFeed.css'
import { supabase } from '../../client'
import { Link } from "react-router-dom"
import Post from "../components/Post";

const HomeFeed = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            // event.preventDefault();

            const { data } = await supabase
                .from("Posts")
                .select()
                .order("created_at", { ascending: true });
            setPosts(data);
        };

        fetchPosts()
    }, []);

    const sortPostsByDate = () => {
        var temp = [...posts]
        temp.sort((a, b) => (Date.parse(b.created_at) - Date.parse(a.created_at)))
        console.log(temp)
        console.log(posts)
        setPosts(temp)
    } 

    const sortPostsByUpvotes = () => {
        var temp = [...posts]
        temp.sort((a, b) => (b.upvotes - a.upvotes))
        setPosts(temp)
    }

    return (
        <div className="HomeFeed">
            <div className="filters">
                <button className="filterButton" onClick={sortPostsByDate}>Newest</button>
                <button className="filterButton" onClick={sortPostsByUpvotes}>Most Popular</button>
            </div>
            {posts ? (posts.map((post, index) => (
                <Link key={index} className="post" to={`/${post.id}`}>
                    <Post timeCreated={post.created_at} title={post.title} upvotes={post.upvotes} />
                </Link>
            ))) : null}
        </div>
    );
};

export default HomeFeed;