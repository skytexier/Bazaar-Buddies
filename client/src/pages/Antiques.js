import React, { useEffect } from 'react';
import { useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { ProductCard } from '../components/ProductCard.js';
import  Splash  from '../components/Splash/Splash.js'



const Antiques = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.ebay.com/buy/browse/v1/item_summary/search?&category_ids=10958&limit=20`, 
      {
      method: 'GET',
      headers: {
        'Authorization':'Bearer v^1.1#i^1#p^1#r^0#f^0#I^3#t^H4sIAAAAAAAAAOVYa2wUVRTutNsiYDGNvGyQLAMFos7snZntPobu6tIWuhHa0lmBNjZkHne2Y2dnhrkzbBdFm2JQwfhMiEjUkiBRMIpoRPxhSCFGEgiPkAYhxB8aBKPww0TERHBmdynbSgDpJjZx/2zm3HPP/b7vnnPvmQG9FeMf2tC04XIlNq60vxf0lmIYNRGMryh/eFJZaXV5CShwwPp75/R6+srO1yE+pRpsG0SGriHo7UmpGmKzxghumxqr80hBrManIGItkeViS5ewNAlYw9QtXdRV3BtviOCSX+YDYpASBD8tMv6AY9Wux0zoETwgBILBWt4v8nyIATJwxhGyYVxDFq9ZEZwGNEMAiqCCCUCxtYBlaNJPMR24dzk0kaJrjgsJ8GgWLpudaxZgvTVUHiFoWk4QPBqPLeJaYvGGxuZEna8gVjSvA2fxlo2GP9XrEvQu51Ub3noZlPVmOVsUIUK4L5pbYXhQNnYdzF3Az0pdSwPIU46cggSAyASKIuUi3Uzx1q1xuBZFIuSsKws1S7Eyt1PUUUN4CopW/qnZCRFv8Lp/y2xeVWQFmhG8cWGsPdbaike57kwC9iiQaIO8aDXW60RrWwMhh2VGFoWwTIRlQQwF5XB+oVy0vMwjVqrXNUlxRUPeZt1aCB3UcKQ2/gJtHKcWrcWMyZaLqNCPyWtIh6kOd1Nzu2hbXZq7rzDlCOHNPt5+B4ZmW5apCLYFhyKMHMhKFMF5w1AkfORgNhfz6dODIniXZRmsz5dOp8k0Q+pm0kcDQPlWLl3CiV0wxeOOr1vrOX/l9hMIJUtFhM5MpLBWxnCw9Di56gDQknjUHwSMP5jXfTis6EjrPwwFnH3DK6JYFQIhLfkZKgClUEgGMlOMConmk9Tn4oACnyFSvNkNLUPlRUiITp7ZKWgqEsvUyjQTkiEhBZyM9YdlmRBqpQBByRACCAVBDIf+T4Vyp6nOQdGEVlFyvWh53tOstjU28k200RLn4nbAWPp4hsokg3JS7eBCKXGttswv9qBY18L2yJ1Ww03J16uKo0zCWb8YAri1XjwRmnRkQWlU9DhRN2CrripiZmxtMGNKrbxpZTioqo5hVCRjhhEvzlldNHr/8pi4O97Fu6P+o/vppqyQm7Jji5U7HzkBeEMh3RuIFPWUz611nXfaD9e8Kot6VLwVp3MdU6wdkjm2ipRrOcksXRKtEUkTIt02nW6bbHE7sITeDTXnPrNMXVWhuZwadT2nUrbFCyoca4VdhARX+DF22TqvNEzY7SfoUfESs1fpqrF2JBXjKPYsvsu22jf8JT9akv1RfdgA6MO+LsUwUAdqqNlgVkXZE56ye6uRYkFS4WUSKUnNeXc1IdkNMwavmKX3l1wGP20Vf2n6cGP31fTqcwvWlRR+Y+jvBNOHvjKML6MmFnxyADNujJRT902rpBlAUUFA1QKG7gCzb4x6qKmeyX+t1wcOdoRriKrqveO+nOR57tjrs0DlkBOGlZd4+rCSOuz0zO0n2okJnqT02yvSW8nolsGy45MnfT+96YeN21dsGjhrS53T1u6e4Dm7M3qJGKx4MfkH+JEb9H88Zd/h3eDQ0YPleE2MOL8r/XTnn+vMlcdeOrfx5JOzT1d959t/JdZ64YVdnS1X7B0z45vfvVC+rSszdy12ZkHwsfdKp6ZmXN19ijrz/Jng2YGPdr7wOf72EW7Pz9I7V0+d1LnKX+vBrJoY99r6I+2Ldz0b3PfJpyfWHOqIzb9U983q+YJx9NtnPlj52ab51M7qa3uWJfb2f6U+gKU3v/nGg/UVXY/O+2La8cFDc7cm32caVvy+TnnkcLwzUlV1YNvLNdcu7p/36pRTYeHAuDn3XNyxJbeXfwO+PAVP/REAAA==',
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
  }, [props])

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
          <h2>Antiques</h2>
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

export default Antiques;

