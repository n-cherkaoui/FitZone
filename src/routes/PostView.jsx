import { useState, useEffect } from "react";
import { supabase } from "../../client";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import "./PostView.css";

const PostView = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null)
    const [comments, setComments] = useState(null)
    const [addedComments, setAddedComments] = useState(0)

    const deletePost = async () => {
        await supabase
            .from('Posts')
            .delete()
            .eq("id", id);

        window.location = "/"
    }

    const sendComment = async (e) => {
        e.preventDefault();
        if (e.key === 'Enter') {

            console.log(e.target.value)

            // Insert the e into the database
            await supabase
                .from('Comments')
                .insert({ content: e.target.value, userId: id })
                .select()

            setAddedComments(addedComments + 1)
            // Redirect to the home page
            // window.location = "/";
        }
    };

    const addUpvote = async (e) => {
        e.preventDefault();

        setPost({ ...post, upvotes: post.upvotes + 1 })

        await supabase
            .from("Posts")
            .update({ upvotes: post.upvotes + 1 })
            .eq("id", id);

        // window.location = "/gallery";
    };

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
    }, [])

    useEffect(() => {
        const fetchComments = async () => {
            const { data } = await supabase
                .from("Comments")
                .select()
                .eq("userId", id)
            setComments(data)
        }
        fetchComments()
    }, [addedComments])

    return (
        <div>
            {post ?
                <div>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <img src={post.image} />
                    <div className="buttons">
                        <button className="upvote" onClick={addUpvote}>
                            <FontAwesomeIcon
                                icon={faThumbsUp}
                            />
                            <p>{post.upvotes} upvotes</p>
                        </button>
                        <button className="edit" onClick={() => (window.location=`/edit/${id}`)}>
                            <FontAwesomeIcon icon={faPen} />
                        </button>
                        <button className="delete" onClick={deletePost}>
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                    <div className="commentsBox">
                        {comments ? comments.map((comment) => (
                            <p>{comment.content}</p>
                        ))
                            :
                            null}
                        <input type="text" placeholder="Leave a comment..." onKeyUp={sendComment}></input>
                    </div>
                </div>
                : null}
        </div>
    );
}

export default PostView;