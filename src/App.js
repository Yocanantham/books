import { useState, useEffect } from "react";
import axios from "axios";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
    const [booksList, setbooksList] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get("http://localhost:3001/books");
        setbooksList(response.data);
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    const editBooksbyId = async (id, newTitle) => {
        // ! CODE WITH THE JSON SERVER.
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle,
        });
        setbooksList((prevbooksList) => {
            return prevbooksList.map((book) => {
                if (book.id === id) {
                    return { ...book, ...response.data };
                    // -> It is important to note that the "...response.data" should be used for latest in react.
                }
                return book;
            });
        });
        // ? CODE WITHOUT THE JSON SERVER.
        // setbooksList((prevbooksList) => {
        //     return prevbooksList.map((book) => {
        //         if (book.id === id) {
        //             return { ...book, title: newTitle };
        //         }
        //         return book;
        //     });
        // });
    };

    const deleteBookbyId = async (id) => {
        // ! CODE WITH THE JSON SERVER.
        await axios.delete(`http://localhost:3001/books/${id}`);
        setbooksList((prevbooksList) => {
            return prevbooksList.filter((book) => {
                return book.id !== id;
            });
        });
        // ? CODE WITHOUT THE JSON SERVER.
        // setbooksList((prevbooksList) => {
        //     return prevbooksList.filter((book) => {
        //         return book.id !== id;
        //     });
        // });
    };

    const createBook = async (title) => {
        // # We always make a async await when handling server!
        // ! CODE WITH THE JSON SERVER.
        const response = await axios.post("http://localhost:3001/books", {
            title,
        });
        setbooksList((prevbooksList) => [...prevbooksList, response.data]);

        // ? CODE WITHOUT THE JSON SERVER.
        // console.log("Book created for : ", title);
        //  -> The code before the use of JSON server now!
        // setbooksList((prevbooksList) => [
        //     ...prevbooksList,
        //     { id: Math.round(Math.random() * 9999), title: title },
        // ]);
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
