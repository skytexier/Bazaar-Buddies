import React, { useState } from 'react';
import PostForm from './PostForm';

function Post(props) {
  const [edit, setEdit] = useState({
    //name description image price category
    id: null,
    name: '',
    // description: '',
    // image: '',
    // price: '',
    category: '',

  });

  console.log(props.post);

  const submitUpdate = (name) => {
    props.editPostItem(edit.id, name);
    setEdit({ id: null, name: '' ,category: '' });
    //, description: '', image: '', price: ''
  };

  if (edit.id) {
    return <PostForm edit={edit} onSubmit={submitUpdate} />;
  }

  return props.post.map((item, i) => (
    <div
      className={
        item.isComplete
          ? `post-row complete ${item.category}`
          : `post-row ${item.category}`
      }
      key={i}
    >
      <div key={item.id} onClick={() => props.completePostItem(item.id)}>
        {item.text}
      </div>
      <div className="icons">
        {console.log(item)}
        <p onClick={() => setEdit({ id: item.id, name: item.text, category: item.category })}> ✏️</p>
        {/* description: item.description, image: item.image, price: item.price, */}
        <p onClick={() => props.removePostItem(item.id)}> 🗑️</p>
      </div>
    </div>
  ));
}

export default Post;

//testing JL
