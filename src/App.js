import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {
    const [booksList, setbooksList] = useState([]);
    const createBook = (title) => {
        // console.log("Book created for : ", title);

        setbooksList((prevbooksList) => [
            ...prevbooksList,
            { id: 123, title: title },
        ]);
    };
    console.log(booksList);

    return (
        <div>
            <div>{booksList.length}</div>
            <BookCreate onCreate={createBook} />
        </div>
    );
}

export default App;
