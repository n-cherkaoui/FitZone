import { useState, useEffect } from "react";
import { supabase } from "../../client";
import { useParams } from "react-router-dom";
import WritePost from "../components/WritePost";
import "./EditView.css";

const EditView = () => {
    const { id } = useParams();

    const editPost = async (e) => {
        if (e.target.title.value === ''){
            alert("Post title is required.")
            return
        }
        
        e.preventDefault();
        // console.log(e.target.title.value)

        // Insert the e into the database
        await supabase
            .from('Posts')
            .update({ title: e.target.title.value, content: e.target.content.value, image: e.target.image.value })
            .eq("id", id);

        // Redirect to the home page
        window.location = `/${id}`;
    };

    // useEffect(() => {
    //     const fetchPost = async () => {
    //         // event.preventDefault();
    //         const { data } = await supabase
    //             .from("Posts")
    //             .select()
    //             .eq("id", id)
    //         setPost(data[0]);

    //         if (!data) {
    //             window.location.href = "/invalid"
    //         }
    //     };
    //     fetchPost()
    // }, [])

    // useEffect(() => {
    //     const fetchComments = async () => {
    //         const { data } = await supabase
    //             .from("Comments")
    //             .select()
    //             .eq("userId", id)
    //         setComments(data)
    //     }
    //     fetchComments()
    // }, [addedComments])

    return (
        <WritePost operation={editPost} submitText="Edit Post"></WritePost>
    );
}

export default EditView;