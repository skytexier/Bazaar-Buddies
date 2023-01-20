import React, { useEffect } from 'react';
import { useState } from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import { ProductCard } from '../components/ProductCard.js';
import  Splash  from '../components/Splash/Splash.js'

import { 
  MdRefresh,
  MdSearch
} from "react-icons/md"



const Antiques = (props) => {
  const [items, setItems] = useState([]);
  const [backups, setBackups] = useState([]);
  const [searchInput, setSearchInput] = useState('')
  const [preSearch, setPreSearch] = useState('')
  const [searchCat, setSearchCat] = useState('20081')
  const [preCat, setPreCat] = useState('')
  const itemArr = []

  const fetchData = async () => {
    try {
      const response = await fetch(`https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsAdvanced&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=SkyTexie-ReactECo-PRD-f9f3fcb9f-9fbc87f9&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&paginationInput.entriesPerPage=25&keywords=${searchInput}&categoryId=${searchCat}&`, {
        'Content-Type' : 'application/json'
      })
      const newData = await response.json();
      const itemsList = newData.findItemsAdvancedResponse[0].searchResult[0].item
      console.log(newData)
      console.log(itemsList)
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

  if (items.length > 0) {
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
  }} else {
    var obj = {};
    obj['name'] = "No item found";
    obj['price'] = "???"
    obj['category'] = "Item Not found"
    itemArr.push(obj)
  }
    return (
      <Col className='product_box' lg={12}>
        <section className="products" id="products">
          <h2>Antiques</h2>
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
          <h4>Sub Categories</h4>
          <div className='subcategory-search'>
          <Button className='subcategory' type='button' variant='secondary' size='md' onClick={() => handleCategoryChange('4707')}>
            <p>Architectural & Garden</p>
          </Button>
          <Button className='subcategory' type='button' variant='secondary' size='md' onClick={() => handleCategoryChange('20082')}>
            <p>Asian Antiques</p>
          </Button>
          <Button className='subcategory' type='button' variant='secondary' size='md' onClick={() => handleCategoryChange('2207')} >
            <p>Ethnographic</p>
          </Button>
          <Button className='subcategory' type='button' variant='secondary' size='md' onClick={() => handleCategoryChange('20091')}>
            <p>Furniture</p>
          </Button>
          <Button className='subcategory' type='button' variant='secondary' size='md' onClick={() => handleCategoryChange('37958')}>
            <p>Maps, Atlases & Globes </p>
          </Button>
          <Button className='subcategory' type='button' variant='secondary' size='md' onClick={() => handleCategoryChange('181726')}>
            <p>Musical Instruments (Pre-1930)</p>
          </Button>
          <Button className='subcategory' type='button' variant='secondary' size='md' onClick={() => handleCategoryChange('20094')}>
            <p>Science & Medicine (Pre-1930)</p>
          </Button>
          <Button className='subcategory' type='button' variant='secondary' size='md' onClick={() => handleCategoryChange('20096')}>
            <p>Silver</p>
          </Button>
          </div>

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

export default Antiques;

