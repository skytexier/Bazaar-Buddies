import React, {useState} from 'react';
import PostForm from './PostForm';
import Post from './Post';

function PostList() {
    const [post, setPost] = useState([]);

    const addPostItem = (item) => {
        if(!item.text){
            return;
        }

        const newPost = [item, ... post];
        setPost(newPost);
    }

    const completePostItem = (id) => {
        let updatedPost = post.map((item) => {
            if(item.id === id){
                item.isComplete = !item.isComplete;
            }
            return item;
        });
        setPost(updatedPost);
    };

    const removePostItem = (id) => {
        const updatedPost = [...post].filter((item) => item.id !== id);

        setPost(updatedPost);
    }

    const editPostItem = (itemId, newValue) => {
        if(!newValue.text) {
            return;
        }

        setPost((prev) => 
            prev.map((item) => (item.id === itemId ? newValue : item))
        );
    };

    return(
        <div>
        <h1>What is the item you are selling?</h1>
        <PostForm onSubmit={addPostItem} />
        <Post
            post={post}
            completePostItem={completePostItem}
            removePostItem={removePostItem}
            editPostItem={editPostItem}
        ></Post>
        </div>
    );
}

export default PostList;
//JL