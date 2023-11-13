import { useState, useEffect } from "react";
import { supabase } from "../../client";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import "./PostView.css";

const PostView = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null)

    useEffect(() => {
        const fetchPost = async () => {
            // event.preventDefault();
            const { data } = await supabase
                .from("Posts")
                .select()
                .eq("id", id)
            setPost(data[0]);

            if (!data) {
                window.location.href = "/invalid"
            }
        };
        fetchPost()
    }, []);

    return (
        <div>
            {post ?
                <div>
                    <h2>{post.name}</h2>
                    <h2>{post.content}</h2>
                    <img src={post.image} />
                    <div className="buttons">
                        <button className="upvote">
                            <FontAwesomeIcon
                                icon={faThumbsUp}
                            />
                            <p>{post.upvotes} upvotes</p>
                        </button>
                        <button className="edit">
                            <FontAwesomeIcon icon={faPen} />
                        </button>
                        <button className="delete">
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>

                </div>
                : null}
        </div>
    );
};

export default PostView;