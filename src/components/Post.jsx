import "./Post.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const Post = ({ timeCreated, title, upvotes }) => {
    return (
        <div className="post">
            <h2 className="title">{title}</h2>
            <div className="postInfo">
                <div className="upvotes">
                    <p>
                        {upvotes}
                    </p>
                    <FontAwesomeIcon
                        icon={faThumbsUp}
                    />
                </div>
                <p className="timestamp">Posted {timeCreated}</p>
            </div>
        </div>
    )
}

export default Post;