import React from 'react';

// Import assets
import './NewsSingle.scss';

const NewsSingle = ( { singleNew } ) => {
    // Object destructuring
    const { urlToImage, url, title, publishedAt, source } = singleNew;

    // Show image if exists
    const coverImg = urlToImage ?
        <div className="bg-img" style={{backgroundImage: `url(${urlToImage})`}}/>
    : <div className="bg-img" />;

    // Render
    return (
        <li className="col-12 col-md-6 col-lg-4 mb-5 NewsSingle">
            {coverImg}
            <div className="text-center news-info">
                <small className="font-weight-bold">{publishedAt}</small>
                <a href={url} target="_blank" rel="noopener noreferrer" className="stretched-link">
                    <h2 className="font-weight-bold mt-2 mb-0" style={{WebkitBoxOrient:'vertical'}}>{title}</h2>
                </a>
                <hr />
                <small className="text-uppercase">{source.name}</small>
            </div>
        </li>
    );
};

export default NewsSingle;