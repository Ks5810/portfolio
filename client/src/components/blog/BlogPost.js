/**
 * BlogPost.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from "react";
import NavBar from "../NavBar";
import Loader from "../Loader";
import { Button, Container } from "react-bootstrap";
import { Link, useHistory, useParams, useRouteMatch } from "react-router-dom";
import ReactMarkdown from "react-markdown/with-html";
import NotFoundPage from "../NotFoundPage";


const BlogPost = ({ posts }) =>
{
    const { id } = useParams();
    const findMatchingPost = () =>
    {
        const index = posts.findIndex(post =>
        {
            return post.oid === id;
        });
        
        return posts[index] ? posts[index].text : null;
    }
    const post = findMatchingPost();
    
    return (
        <div className="blog-post">
            {
                 post ? (
                    <Container>
                        <h3 className="blog-post-heading">
                            { post.subtitle }</h3>
                        <div className="blog-post-body">
                            <div className="markdown-body">
                                <ReactMarkdown
                                    source={ post.body }
                                    escapeHtml={ false }>
                                </ReactMarkdown>
                            </div>
                        </div>
                    </Container>
                ) : <Container className="notfound">
                     <h1 >Oops!</h1>
                     <br/>
                     <p>Could not find the post you are looking for :(</p>
                     <Link to="/blog">
                         <Button className="link">Go to Blog Top</Button>
                     </Link>
                 </Container>
            }
        </div>
    )
};

export default BlogPost;