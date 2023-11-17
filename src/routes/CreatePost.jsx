import './CreatePost.css'
import { supabase } from '../../client'
import WritePost from '../components/WritePost'

const CreatePost = () => {
//   const submitButton = <button type="submit">Create Post</button>

  const createPost = async (e) => {
    if (e.target.title.value === ''){
        alert("Post title is required.")
        return
    }

    e.preventDefault();

    // Insert the e into the database
    await supabase
      .from('Posts')
      .insert({title: e.target.title.value, content: e.target.content.value, image: e.target.image.value})
      .select()

    // Redirect to the home page
    window.location = "/";
  };

  return (
    <div className="postView">
      <h1 className="customHeading">Create a new post!</h1>
      <WritePost operation={createPost} submitText="Create Post"/>
    </div>
  );
};

export default CreatePost;