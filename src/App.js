import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
    const [booksList, setbooksList] = useState([]);

    const editBooksbyId = (id, newTitle) => {
        setbooksList((prevbooksList) => {
            return prevbooksList.map((book) => {
                if (book.id === id) {
                    return { ...book, title: newTitle };
                }
                return book;
            });
        });
    };

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
            <h1>Books to be Read</h1>
            <BookList
                books={booksList}
                onDelete={deleteBookbyId}
                onEdit={editBooksbyId}
            />
            <BookCreate onCreate={createBook} />
        </div>
    );
}

export default App;
