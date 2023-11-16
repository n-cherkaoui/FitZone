import "./Post.css"
import { supabase } from "../../client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { useState, setState } from "react";

const Post = ({ id, timeCreated, title, upvotes }) => {
    const [upvoteVar, setUpvotesVar] = useState(upvotes);

    return (
        <div className="post">
            <h2 className="title">{title}</h2>
            <div className="postInfo">
                <div className="upvotes">
                    <p>
                        {upvotes}
                    </p>
                        <FontAwesomeIcon className="upvoteIcon"
                            icon={faThumbsUp}
                        />
                </div>
                <p className="timestamp">Posted {timeCreated}</p>
            </div>
        </div>
    )
}

export default Post;