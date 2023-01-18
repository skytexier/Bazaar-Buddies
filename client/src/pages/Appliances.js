import React, { useEffect } from 'react';
import { useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { ProductCard } from '../components/ProductCard.js';
import  Splash  from '../components/Splash/Splash.js'



const Appliances = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.ebay.com/buy/browse/v1/item_summary/search?&category_ids=261757&261709&limit=20`, 
      {
      method: 'GET',
      headers: {
        'Authorization':'Bearer v^1.1#i^1#I^3#f^0#r^0#p^1#t^H4sIAAAAAAAAAOVYa2wUVRTutluw0loCoqYxtQ6QEHB378zsc2BXt92tXeiLbqnQhOCdmTvttLMzw9y7dtdXaqPVVLSgAonyo0YkiBqCARWDL2KigSiNr2iCRNMEkahJE5JGwsOZ7VK2lQDSTWzi/tnMueee+33fOefeOwN6Z5Us7a/rHyuzzS4c6gW9hTYbPQeUzCpedktRYUVxAchxsA31Luq19xWdWoFhQtG5FoR1TcWoKpVQVMxljEEqaaicBrGMORUmEOaIwMXDDfUc4wScbmhEEzSFqopFgpRfhGxAlFiedkPexwdMq3opZqsWpHhGQCyUJN4neZDXDc1xjJMopmICVRKkGMCwDkA7aH8rAJyH5Ri/08ME2qmqNmRgWVNNFyegQhm4XGaukYP16lAhxsggZhAqFAvXxpvCsUi0sXWFKydWKKtDnECSxJOfajQRVbVBJYmuvgzOeHPxpCAgjClXaHyFyUG58CUwNwA/IzVEfprxSh6Px8/yIpsXJWs1IwHJ1WFYFll0SBlXDqlEJulrCWqKwXchgWSfGs0QsUiV9bc6CRVZkpERpKLV4XXh5mYqFO9Ot6KUjBwtCAokWqM5mlsiDikgsZLAByRHQOIFv08KZBcaj5ZVecpKNZoqypZmuKpRI9XIRI2mauPO0cZ0alKbjLBELES5fsyEhp52K6fjSUySTtVKK0qYQlRlHq+dgYnZhBgynyRoIsLUgYxEZqp1XRapqYOZUsxWTwoHqU5CdM7l6unpcfawTs3ocDEA0K61DfVxoRMlzF4zfa1ez/jL157gkDNUBGTOxDJH0rqJJWWWqglA7aBCbh9g3b6s7pNhhaZa/2HI4eya3BD5ahBfgIFuH6QZhhHdwMvno0NC2SJ1WTgQD9OOBDS6EdEVKCCHYNZZMoEMWeRYj8Swfgk5RK9Zse6AJDl4j+h10BJCACGeFwL+/1OjXG+px5FgIJKfWs9XnacalZZoFNYxelMsHkt69YZVaTrd4ZM6lPa4PyE8rK52Cykc7qxeF7zebrgi+RpFNpVpNdfPiwBWr+dNhDoNEyROi15c0HTUrCmykJ5ZCWYNsRkaJB1HimIapkUyrOuxPO3V+aL3L7eJG+OdxzPqvzmfrsgKWyU7s1hZ87EZAOqy0zqBnIKWcGlWr0Pz+mGZN2RQT4u3bF5cZxRrk+Q4W1kcv3I6NYuuEz8kOA2EtaRhXradTdYNrFXrRqp5nhFDUxRktNHT7udEIkkgr6CZ1th5KHAZzrDDlvb63ACwDPBPi5eQOUo3zLQtKS9bsb32xq7Vrsnv+KGCzI/usx0GfbaPCm02sAIspheCu2cVrbEXlVZgmSCnDCUnljtU89XVQM5ulNahbBTOLxgDv74i/F73xkD3hZ6NJ5c/VpD7iWFoPbhj4iNDSRE9J+eLA7jz8kgxXX57GcMCmvYD4GEZfztYeHnUTt9mv7XxLt/O0lEyfOav8j/im4c/xVs79oGyCSebrbjA3mcreGDp9++9P/LTgUO/3ZTcMbrn58GD+7bPf3DZWMNR9pObo4dfql38Nlddumv5gkjjyW1DS+Y2BwZ3fz6WqhjhK12f9T66/wv+/Iubh9Pndd+e8gtv7a4MHj8+Om+t9tSP647h8+8UPffnzpfTB7rWi8/AeZv7PzAOHbz3y9cqRuTmc7+ky8oXRJZseqTyY7xm65ldUk/nAOn4enDjlqdb5kaGlh5h9g5sOd3/XWn4fvp0u+3oq331X3VVvrD1oq9ibrSk5vH9P6w8FZlz7pvte1ed7Qpvenbl0Lv0h5wYSi6650RsGzXQ3Thy7NC3T3gvbpCU+87Wtx8BIzuej85+0z7QNnai6PXddkZ8cnjt6Hgu/wZ9nGT7/BEAAA==',
        'Content-Type' :'application/json',
        'X-EBAY-C-MARKETPLACE-ID': 'EBAY_US',
        'X-EBAY-C-ENDUSERCTX': 'affiliateCampaignId=<ePNCampaignId>,affiliateReferenceId=<referenceId></referenceId>'
        }
      }
      )
      const newData = await response.json();
      setItems(newData.itemSummaries)
      console.log(newData)
    }
    fetchData();
  }, [])

 const itemArr = []

 for (var i=0; i < items.length; i++){
   var obj = {};
   obj['name'] = items[i].title;
   obj['price'] = items[i].price.value;
   obj['category'] = items[i].categories[0].categoryName;
   obj['image'] = items[i].image.imageUrl
   obj['link'] = items[i].itemAffiliateWebUrl
   itemArr.push(obj)
 }

 console.log(itemArr)

console.log(items)
    return (
      <Col lg={12}>
        <section className="products" id="products">
          <h2>Appliances</h2>
              <Row className="justify-content-center">
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

export default Appliances;