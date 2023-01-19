import React, { useEffect } from 'react';
import { useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { ProductCard } from '../components/ProductCard.js';
import  Splash  from '../components/Splash/Splash.js'



const Clothes = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByCategory&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=SkyTexie-ReactECo-PRD-f9f3fcb9f-9fbc87f9&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&categoryId=11450&paginationInput.entriesPerPage=25&outputSelector=CategoryHistogram`)
      const newData = await response.json();
      const itemsList = newData.findItemsByCategoryResponse[0].searchResult[0].item
      console.log(newData)
      setItems(itemsList)
      console.log(itemsList)
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
          <h2>Clothes</h2>
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

export default Clothes;