import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/layouts/NavBar';
import Routes from '../Routing/Routes';

import React from 'react'

export default function Routing() {
    return (
    <Router>
        <NavBar/>
        <Routes />
    </Router>
  );

}


    