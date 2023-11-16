import { useState, useEffect } from 'react';
import './HomeFeed.css'
import { supabase } from '../../client'
import { Link } from "react-router-dom"
import Post from "../components/Post";
import moment from 'moment-timezone';

const HomeFeed = ({ searchField }) => {
    const [posts, setPosts] = useState([])
    const [filteredPosts, setFilteredPosts] = useState([])

    // Format the difference into a readable string
    const getCurrentDate = (timeStamp) => {
    
        // console.log(readableFormat)
        return readableFormat
    }

    useEffect(() => {
        const fetchPosts = async () => {
            // event.preventDefault();

            const { data } = await supabase
                .from("Posts")
                .select()
                .order("created_at", { ascending: true });
            setPosts(data);
            setFilteredPosts(data);
        };

        fetchPosts()
    }, []);

    useEffect(() => {
        setFilteredPosts(() => {
            return posts.filter(post => post.title.toLowerCase().includes(searchField.toLowerCase()))
        })
    }, [searchField])

    const sortPostsByDate = () => {
        var temp = [...filteredPosts]
        temp.sort((a, b) => (Date.parse(b.created_at) - Date.parse(a.created_at)))
        setFilteredPosts(temp)
    }

    const sortPostsByUpvotes = () => {
        var temp = [...filteredPosts]
        temp.sort((a, b) => (b.upvotes - a.upvotes))
        setFilteredPosts(temp)
    }

    return (
        <div className="homeFeed">
            <div className="filters">
                <p>Order By: </p>
                <button className="filterButton" onClick={sortPostsByDate}>Newest</button>
                <button className="filterButton" onClick={sortPostsByUpvotes}>Most Popular</button>
            </div>
            {filteredPosts ? (filteredPosts.map((post, index) => (
                <Link key={index} className="posts" to={`/${post.id}`}>
                    <Post timeCreated={moment(post.created_at).fromNow()} title={post.title} upvotes={post.upvotes} />
                </Link>
            ))) : null}
        </div>
    );
};

export default HomeFeed;