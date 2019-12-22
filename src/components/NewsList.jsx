import React from 'react';

import './NewsList.scss';
import NewsSingle from './NewsSingle';

const NewsList = ( { news } ) => {
    return (
        <main className="container NewsList">
            <ul className="row list-unstyled">
                {news.map(singleNew => (
                    <NewsSingle
                        key={singleNew.url}
                        singleNew={singleNew}
                    />
                ))}
            </ul>
        </main>
    );
};

export default NewsList;