// import React, { useState } from 'react';
// import PostForm from './PostForm';

// function Post(props) {
//   const [edit, setEdit] = useState({
//     id: null,
//     value: '',
//     eagerness: '',
//   });

//   console.log(props.post);

//   const submitUpdate = (value) => {
//     props.editPostItem(edit.id, value);
//     setEdit({ id: null, value: '', eagerness: '' });
//   };

//   if (edit.id) {
//     return <PostForm edit={edit} onSubmit={submitUpdate} />;
//   }

//   return props.post.map((item, i) => (
//     <div
//       className={
//         item.isComplete
//           ? `post-row complete ${item.eagerness}`
//           : `post-row ${item.eagerness}`
//       }
//       key={i}
//     >
//       <div key={item.id} onClick={() => props.completePostItem(item.id)}>
//         {item.text}
//       </div>
//       <div className="icons">
//         {console.log(item)}
//         <p onClick={() => setEdit({ id: item.id, value: item.text, eagerness: item.eagerness })}> ✏️</p>
//         <p onClick={() => props.removePostItem(item.id)}> 🗑️</p>
//       </div>
//     </div>
//   ));
// }

// export default Post;

//testing JL
