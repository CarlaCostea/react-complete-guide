import React, { Component } from 'react';
// to style the active links we need to use NavLink instead of Link
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
// Switch tells react to render only one of the pages -> the first that matches
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './/FullPost/FullPost';

class Blog extends Component {
    state = {
        auth: false
    }
    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/posts"
                                exact
                                activeClassName="my-active"
                                // inline style:
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}
                            >Posts</NavLink></li>
                            <li><NavLink to={{
                                //this is a relative path --> pathname: this.props.match.url + '/new-post',
                                // current page -> this.props.match.url 
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} />*/}

                {/*dynamic url: id is a route parameter */}
                {/*<Route path="/posts/:id" exact component={FullPost} />*/}
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={NewPost} /> : null}
                    <Route path="/posts" component={Posts} />
                    <Route render={() => <h1>Not found</h1>} />
                    {/*<Redirect from="/" to="/posts" />*}
                    {/*<Route path="/" component={Posts} /> */}
                    {/*<Route path="/:id" exact component={FullPost} />*/}
                </Switch>
            </div>
        );
    }
}

export default Blog;