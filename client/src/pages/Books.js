import React, { useEffect } from 'react';
import { useState } from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import { ProductCard } from '../components/ProductCard.js';
import  Splash  from '../components/Splash/Splash.js'

import { 
  MdRefresh,
  MdSearch
} from "react-icons/md"


const Books = (props) => {
  const [items, setItems] = useState([]);
  const [backups, setBackups] = useState([]);
  const [searchInput, setSearchInput] = useState('')
  const [preSearch, setPreSearch] = useState('')
  const [searchCat, setSearchCat] = useState('267')
  const itemArr = []

  const fetchData = async () => {
    try {
      const response = await fetch(`https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsAdvanced&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=SkyTexie-ReactECo-PRD-f9f3fcb9f-9fbc87f9&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&paginationInput.entriesPerPage=25&keywords=${searchInput}&categoryId=${searchCat}&`, {
        'Content-Type' : 'application/json'
      })
      const newData = await response.json();
      const itemsList = newData.findItemsAdvancedResponse[0].searchResult[0].item
      setItems(itemsList)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [searchInput, searchCat])

  // Form input handlers
  const handleChange = (event) => {
    event.preventDefault();
    setPreSearch(event.target.value)
  }

  const handleClick = (event) => {
    setSearchInput(preSearch)
  }

  const handleCategoryChange = (value) => {
    setSearchCat(value)
  }

  if (items === undefined) {
    var obj = {};
    obj['name'] = "No item found";
    obj['price'] = "???"
    obj['category'] = "Item Not found"
    itemArr.push(obj)
  } else {
    for (var i=0; i < items.length; i++){
      var obj = {};
      obj['name'] = items[i].title[0];
      obj['price'] = items[i].sellingStatus[0].convertedCurrentPrice[0].__value__;
      obj['category'] = items[i].primaryCategory[0].categoryName[0].replace("/thumbs/", "");
   
      //Resizing image from eBay API using replace
      let newImage = [items[i].galleryURL[0]];
      let newString = newImage[0].replace("s-l140", 's-l500');
      obj['image'] = newString;
      obj['link'] = items[i].viewItemURL[0]
      itemArr.push(obj)
  }}
    return (
      <Col className='product_box' lg={12}>
        <section className="products" id="products">
          <h2>Books</h2>
          <Form className='item-search'>
              <Form.Group as={Col} className='item_form'>
                <Form.Control
                  className='item_form_searchbar'
                  value={preSearch}
                  onChange={handleChange}
                  type="text"
                  placeholder="Search for a specific item"
                />
                <Button className='item_searchBtn' type="button" variant="warning" size="lg" onClick={handleClick}>
                <MdSearch/>
                </Button>
                </Form.Group>
          </Form>
          <Container className='subcategories'>
          <h4>Major Categories</h4>
          <Col className='categoryButtons d-flex'>
          <Button className='subcategory' type='button' variant='secondary' size='md' onClick={() => handleCategoryChange('29792')}>
            <p>Audiobooks</p>
          </Button>
          <Button className='subcategory' type='button' variant='secondary' size='md' onClick={() => handleCategoryChange('261186')}>
            <p>Books</p>
          </Button>
          <Button className='subcategory' type='button' variant='secondary' size='md' onClick={() => handleCategoryChange('184644')} >
            <p>Textbooks</p>
          </Button>
          <Button className='subcategory' type='button' variant='secondary' size='md' onClick={() => handleCategoryChange('63')}>
            <p>Comic Books & Memorabilia</p>
          </Button>
          <Button className='subcategory' type='button' variant='secondary' size='md' onClick={() => handleCategoryChange('152')}>
            <p>Sci-fi and Horror </p>
          </Button>
          <Button className='subcategory' type='button' variant='secondary' size='md' onClick={() => handleCategoryChange('44408')}>
            <p>Warhammer 40K</p>
          </Button>
          <Button className='subcategory' type='button' variant='secondary' size='md' onClick={() => handleCategoryChange('44109')}>
            <p>Dungeons & Dragons</p>
          </Button>
          </Col>
          </Container>
      <Row className="product_grid">
        {itemArr.map((item, index) => {
          return <ProductCard
          key={index}
          {...item}
          />
        })}
        </Row>
        </section>
      </Col>
    );
}

export default Books;