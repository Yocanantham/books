import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
    const [booksList, setbooksList] = useState([]);

    const deleteBookbyId = (id) => {
        setbooksList((prevbooksList) => {
            return prevbooksList.filter((book) => {
                return book.id !== id;
            });
        });
    };

    const createBook = (title) => {
        // console.log("Book created for : ", title);

        setbooksList((prevbooksList) => [
            ...prevbooksList,
            { id: Math.round(Math.random() * 9999), title: title },
        ]);
    };
    console.log(booksList);

    return (
        <div className="app">
            <BookList books={booksList} onDelete={deleteBookbyId} />
            <BookCreate onCreate={createBook} />
        </div>
    );
}

export default App;
