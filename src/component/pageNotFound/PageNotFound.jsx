import React from 'react';
import './PageNotFound.css'; // Optional: you can add styles in this file.

const PageNotFound = () => {
    return (
        <div className="page-not-found">
            <h1>404</h1>
            <p>Oops! The page you're looking for does not exist.</p>
            <a href="/" className="home-link">Go Back Home</a>
        </div>
    );
};

export default PageNotFound;
