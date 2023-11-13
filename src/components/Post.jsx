import "./Post.css"

const Post = ({ timeCreated, title, upvotes }) => {
    return (
        <div className="post">
            <h2>{title}</h2>
            <p>{timeCreated}</p>
            <p>{upvotes}</p>
        </div>
    )
}

export default Post;