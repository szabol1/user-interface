import React, {useEffect,useState} from 'react';
import {Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
//import {getAllPosts} from "../../../../server/models/posts";
import styled from 'styled-components';

function PostSplide() {
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        //getRecentPosts();//not sure how to get random recent posts from random users with mongoDB?
    }, []);

    const getRecentPosts = async () => {
        //const getPosts = await fetch(await getAllPosts());
        //const posts = await getPosts.json();
        setPosts(posts);
        console.log(posts);
    }

    return (
        <div>
            <div className="Wrapper">
                <Splide
                    options={{
                        perPage: 4,
                        pagination: false,
                        drag: 'free',
                        gap: '1rem',
                    }}
                >
                    {posts.map((post) => {
                        return (
                            <SplideSlide key={post.id}>
                                <Card>
                                    <img src={post.content} alt={post.title}/>
                                    <p>{post.title}</p>
                                </Card>
                            </SplideSlide>
                        );
                    })}
                </Splide>
            </div>
        </div>
    )
}
const Wrapper = styled.div`
  padding: 0rem 9rem;
  justify-content: center;
  `
const Card = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
export default PostSplide