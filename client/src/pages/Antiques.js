import React, { useEffect } from 'react';
import { useState } from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import { ProductCard } from '../components/ProductCard.js';
import  Splash  from '../components/Splash/Splash.js'

import { 
  MdSearch
} from "react-icons/md"



const Antiques = (props) => {
  const [items, setItems] = useState([]);
  const [searchInput, setSearchInput] = useState('pokemon')
  const [searchCat, setSearchCat] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsAdvanced&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=SkyTexie-ReactECo-PRD-f9f3fcb9f-9fbc87f9&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&paginationInput.entriesPerPage=25&keywords=${searchInput}&categoryId=20081`, {
          'Content-Type' : 'application/json'
        })
        console.log(response)
        const newData = await response.json();
        const itemsList = newData.findItemsAdvancedResponse[0].searchResult[0].item
        console.log(newData)
        setItems(itemsList)
        console.log(itemsList)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, [props])

 const itemArr = []

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
 }

 console.log(itemArr)
    return (
      <Col className='product_box' lg={12}>
        <section className="products" id="products">
          <h2>Antiques</h2>
          <h3>Search for specific items!</h3>
          <Form className='item-search'>
              <Form.Group as={Col} className='item_form'>
                <Form.Control
                  className='item_form_searchbar'
                  name="searchInput"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type="text"
                  placeholder="Search for a specific item in Antiques"
                />
                <Button className='item_searchBtn' type="submit" variant="success" size="lg">
                <MdSearch/>
                </Button>
                </Form.Group>
          </Form>
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

