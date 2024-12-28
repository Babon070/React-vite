import React from 'react';
import Header from './components/header/header';
import { Router } from 'react-router-dom';
import AppRouter from './routes/Router';

function App() {
    return (
        <>
            <Header />
            <AppRouter />
        </>

    )

}

export default App;
