import { useState } from "react";

function BookCreate({ onCreate }) {
    const [title, setTitle] = useState("");

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
        setTitle("");
    };
    return (
        <div className="book-create">
            <h3>Add a book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title of Book </label>
                <input
                    className="input"
                    onChange={handleChange}
                    value={title}></input>
                <button className="button">Submit!</button>
            </form>
        </div>
    );
}

export default BookCreate;
