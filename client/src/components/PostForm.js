//Testing JL
import React, { useState } from 'react';

function PostForm(props) {
  const [input, setInput] = useState('');
  let [category, setCategory] = useState('');

  const categoryLevel = ['Antiques', 'Appliances', 'Auto_Parts', 'Books', 'Vehicles', 'Clothes', 'Collectibles', 'Electronics', 'Farm_&_Garden', 'Furniture', 'General','Bedroom','Jewelry','Music','Sporting','Tools','Toys_&_Games','Video_Gaming']//Add the categories here

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!category) {
      category = 'General';
    }

    props.onSubmit({
      id: Math.random(Math.floor() * 1000),
      text: input,
      // description: input_2,
      // image: input_3,
      // price: input_4,
      category: category,
    });

    setInput('');
    setCategory('');
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };
//name description image price category
  return !props.edit ? (
    <div>
      <form className="post-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add product name"
          value={input}
          name="text"
          className="post-input"
          onChange={handleChange}
        ></input>
        <div className="dropdown">
          <button className={`dropbtn ${category}`}>
            {category || 'Category'}
          </button>
          <div className="dropdown-content">
            {/* add descrriptions */}
            {/* const categoryLevel = ['Farm_&_Garden', 'Furniture', 'General','Bedroom','Jewelry','Music','Sporting','Tools','Toys_&_Games','Video_Gaming']//Add the categories here */}
            <p onClick={() => setCategory(categoryLevel[0])}>Antiques</p>
            <p onClick={() => setCategory(categoryLevel[1])}>Appliances</p>
            <p onClick={() => setCategory(categoryLevel[2])}>Auto_Parts</p>
            <p onClick={() => setCategory(categoryLevel[3])}>Books</p>
            <p onClick={() => setCategory(categoryLevel[4])}>Vehicles</p>
            <p onClick={() => setCategory(categoryLevel[5])}>Clothes</p>
            <p onClick={() => setCategory(categoryLevel[6])}>Collectibles</p>
            <p onClick={() => setCategory(categoryLevel[7])}>Electronics</p>
            <p onClick={() => setCategory(categoryLevel[8])}>Farm_&_Garden</p>
            <p onClick={() => setCategory(categoryLevel[9])}>Furniture</p>
            <p onClick={() => setCategory(categoryLevel[10])}>General</p>
            <p onClick={() => setCategory(categoryLevel[11])}>Bedroom</p>
            <p onClick={() => setCategory(categoryLevel[12])}>Jewelry</p>
            <p onClick={() => setCategory(categoryLevel[13])}>Music</p>
            <p onClick={() => setCategory(categoryLevel[14])}>Sporting</p>
            <p onClick={() => setCategory(categoryLevel[15])}>Tools</p>
            <p onClick={() => setCategory(categoryLevel[16])}>Toys_&_Games</p>
            <p onClick={() => setCategory(categoryLevel[17])}>Video_Gaming</p>
          </div>
        </div>
        <button className="post-button">Add Product</button>
      </form>
    </div>
  ) : (
    <div>
      <h3>Update entry: {props.edit.value}</h3>
      <form className="post-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={props.edit.value}
          value={input}
          name="text"
          className="post-input"
          onChange={handleChange}
        ></input>
        <div className="dropdown">
          <button className={`dropbtn ${category}`}>
            {category || 'Category'}
          </button>
          <div className="dropdown-content">
            {/* add descrriptions */}
            <p onClick={() => setCategory(categoryLevel[0])}>Antiques</p>
            <p onClick={() => setCategory(categoryLevel[1])}>Appliances</p>
            <p onClick={() => setCategory(categoryLevel[2])}>Auto_Parts</p>
            <p onClick={() => setCategory(categoryLevel[3])}>Books</p>
            <p onClick={() => setCategory(categoryLevel[4])}>Vehicles</p>
            <p onClick={() => setCategory(categoryLevel[5])}>Clothes</p>
            <p onClick={() => setCategory(categoryLevel[6])}>Collectibles</p>
            <p onClick={() => setCategory(categoryLevel[7])}>Electronics</p>
            <p onClick={() => setCategory(categoryLevel[8])}>Farm_&_Garden</p>
            <p onClick={() => setCategory(categoryLevel[9])}>Furniture</p>
            <p onClick={() => setCategory(categoryLevel[10])}>General</p>
            <p onClick={() => setCategory(categoryLevel[11])}>Bedroom</p>
            <p onClick={() => setCategory(categoryLevel[12])}>Jewelry</p>
            <p onClick={() => setCategory(categoryLevel[13])}>Music</p>
            <p onClick={() => setCategory(categoryLevel[14])}>Sporting</p>
            <p onClick={() => setCategory(categoryLevel[15])}>Tools</p>
            <p onClick={() => setCategory(categoryLevel[16])}>Toys_&_Games</p>
            <p onClick={() => setCategory(categoryLevel[17])}>Video_Gaming</p>
          </div>
        </div>
        <button className="post-button">Update</button>
      </form>
    </div>
  );
}

export default PostForm;
//JL