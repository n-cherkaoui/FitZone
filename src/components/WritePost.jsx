import "./WritePost.css"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const WritePost = ({ operation, submitText }) => {
    const { id } = useParams();

    return (
        <form className="writePostWrapper" onSubmit={operation}>
            <div className="inputBoxes">
                <div className="inputBox">
                    <label for="title"></label>
                    <input
                        type="text"
                        id="title"
                        placeholder="Title"
                    />
                </div>
                {/* <br /> */}

                <div className="inputBox">
                    <label for="content"></label>
                    <textarea
                        // type="text"
                        id="content"
                        rows="10"
                        placeholder="Content (Optional)"
                    />
                </div>
                {/* <br /> */}

                <div className="inputBox">
                    <label for="image"></label>
                    <input
                        type="text"
                        id="image"
                        placeholder="Image URL (Optional)"
                    />
                </div>
            </div>

            <button className="submitButton" type="submit">{submitText}</button>
        </form>
    )
}

export default WritePost