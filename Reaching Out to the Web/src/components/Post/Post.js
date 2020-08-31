import React from 'react';

import './Post.css';
import { withRouter } from 'react-router-dom';

const post = (props) => (
    <article className="Post" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
);

// to get acces to props from parent we need to use hoc withRouter
export default withRouter(post);