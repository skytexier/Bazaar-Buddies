// import React, {useState} from 'react';
// import PostForm from './PostForm';
// import Post from './Post'

// function PostList() {
//     const [post, setPost] = useState([]);

//     const addPostItem = (item) => {
//         if(!item.text){
//             return;
//         }

//         const newPost = [item, ... post];
//         setPost(newPost);
//     }

//     const completePostItem = (id) => {
//         let updatedPost = post.map((item) => {
//             if(item.id === id){
//                 item.isComplete = !item.isComplete;
//             }
//             return item;
//         });
//         setPost(updatedPost);
//     };

//     const removePostItem = (id) => {
//         const updatedPost = [...bucket].filter((item) => item.id !== id);

//         setPost(updatedPost);
//     }

//     const editPostItem = (itemId, newValue) => {
//         if(!newValue.text) {
//             return;
//         }

//         setPost((prev) => 
//             prev.map((item) => (item.id === itemId ? newValue : item))
//         );
//     };

//     return(
//         <div>
//         <h1>What is the item you are selling?</h1>
//         <PostForm onSubmit={addPostItem} />
//         <Post
//             post={post}
//             completePostItem={completePostItem}
//             removePostItem={removePostItem}
//             editPostItem={editPostItem}
//         ></Post>
//         </div>
//     );
// }

// export default PostList;
//JL

// import {React, useState, useEffect} from "react";

// export default function Post(){
//     // const inputFormatting = "";
//     // const inputFormattingArea ="";

//     const [errorState, setErrorState] = useState(null);
//     const [formValues, setFormValues] = useState({
//         name: null,
//         email: null,
//         picture: null,
//         productInfo: null,
//         price: null,
//     });

//     useEffect(() => {
//         if (errorState !== null) {
//         alert(errorState);
//         }
//     }, [errorState, formValues]);

//     function formValidation(event){
//         switch (event.target.name) {
//         case "email":
//             console.log("triggered email validation");
//             emailValidation(event.target.value)
//             ? setErrorState(null)
//             : setErrorState("Invalid email");
//             break;
//         case "name":
//             event.target.value.length > 0
//             ? setErrorState(null)
//             : setErrorState("Name is a required field");
//             break;
//         case "productInfo":
//             event.target.value.length > 0
//             ? setErrorState(null)
//             : setErrorState("Message is a required field");
//             break;
//         case "picture":
//             event.target.value.length > 0
//             ? setErrorState(null)
//             : setErrorState("Message is a required field");
//             break;
//         case "price":
//             event.target.value.length > 0
//             ? setErrorState(null)
//             : setErrorState("Message is a required field");
//             break;
//         default:
//             setErrorState("You managed to break this form in a really unusual way");
//         }

//         setFormValues({
//         ...formValues,
//         [event.target.name]: event.target.value,
//         });
//     }
    
//     function submitForm(event){
//         event.preventDefault();
//         formValidation(event);
//         if(errorState !== null){
//             console.log("Error: Form content invalid");
//         }
//         else{
//             window.open(
//                 ``
//             );
//         }
//     }

//     return(
//         <div className="">
//             <section id="post" className="">
//                 {/* <form className="" onSubmit={submitForm}>
//                     <input type="text" name="" placeholder="" className=""></input>
//                     <input type="text" name="" placeholder="" className=""></input>
//                     <input type="text" name="" placeholder="" className=""></input>
//                     <button type="submit" className="" >Submit</button>
//                 </form> */}
//             </section>
//         </div>
//     );
// }
// //working on it (JL) feel free to add on