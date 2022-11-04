
import NotesList from './components/NotesList';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Search from './components/Search';
import Header from './components/Header';

const App = () => {
     
    const [notes, setNotes] = useState([
        {
        id: nanoid(),
        text: "This is my first note!",
        date: "15/04/2022"
        },
        {
            id: nanoid(),
            text: "This is my second note!",
            date: "03/11/2022"
        },
        {
            id: nanoid(),
            text: "This is my third note!",
            date: "09/12/2022"
        },
    ]); //since we are changing this data, it is a good idea to put it in state


    const [searchText, setSearchText] = useState('');

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedNotes = JSON.parse(
            localStorage.getItem('react-notes-app-data')
        );

        if (savedNotes) {
            setNotes(savedNotes);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(
            'react-notes-app-data',
            JSON.stringify(notes)
        );
    }, [notes]);

    const addNote = (text) => {
        //console.log(text);
        const date = new Date();
        const newNote = {
            id: nanoid,
            text: text,
            date : date.toLocaleDateString()

        }
        const newNotes = [...notes, newNote]; //creates new array instead of updating old array
        setNotes(newNotes);
    };

    const deleteNote = (id) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    }

    return (
        <div className={`${darkMode && 'dark-mode'}`}>
            <div className="container">

                <Header handleToggleDarkMode={setDarkMode} />

                <Search handleSearchNote={setSearchText} />

                <NotesList
                    notes={notes.filter((note) =>
                        note.text.toLowerCase().includes(searchText)
                    )}
                    handleAddNote={addNote}
                    handleDeleteNote={deleteNote}
                />
            </div>
        </div>
    );
};


export default App; 