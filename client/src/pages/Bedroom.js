import React, { useEffect } from 'react';
import { useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { ProductCard } from '../components/ProductCard.js';
import  Splash  from '../components/Splash/Splash.js'

const Bedroom = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.ebay.com/buy/browse/v1/item_summary/search?&category_ids=261757&261709&limit=20`, 
      {
      method: 'GET',
      headers: {
        'Authorization':'Bearer v^1.1#i^1#I^3#p^1#r^0#f^0#t^H4sIAAAAAAAAAOVYe2wURRi/60saKBrlFWLhXHxCdm/29u72buUOru2RXqDt0atVDgjsY/a6dF/szrU9IklTkKf4j0EFIYGEBEkQjcQQAxJeQqL4IBijEGMCBhURnwFRA+5uj3KtBJBeYhPvn8t88803v99vvm9mdkB3ReXkFfUrLle57ynZ0g26S9xucjiorCifMrK0ZHy5CxQ4uLd0P9xd1lP67VSTVWSdaYamrqkm9HQpsmoyjjGCZQ2V0VhTMhmVVaDJIJ5JxRpmMT4CMLqhIY3XZMyTqItgLEdz4ZAokDwtCqxoGdXrIVu0CCYGgI8TKJoM+QIkz9NWv2lmYUI1EauiCOYDPgoHJE6GWgDFBEjGTxEg6E9jnlZomJKmWi4EwKIOWsYZaxRAvTVS1jShgawgWDQRm5FqiiXq4o0tU70FsaJ5GVKIRVmzf6tWE6CnlZWz8NbTmI43k8ryPDRNzBvtnaF/UCZ2HcxdwHeU5liBDnMk5ESR53ykryhSztAMhUW3xmFbJAEXHVcGqkhCudspaqnBLYI8yrcarRCJOo/9NzvLypIoQSOCxWtic2LJJBZNtedaYJcE8WbI8iheq+HJ5jpcDIuURTUs4mGR40O0GM5P1BstL/OAmWo1VZBs0UxPo4ZqoIUaDtTGX6CN5dSkNhkxEdmICv0C1zUMhNP2ovauYha1qfa6QsUSwuM0b78CfaMRMiQui2BfhIEdjkRWVem6JGADO51czKdPlxnB2hDSGa+3s7OT6KQIzch4fQCQ3mcaZqX4NqiwmO1r17rjL91+AC45VHhojTQlBuV0C0uXlasWADWDRf00oPx0Xvf+sKIDrf8wFHD29q+IYlVIkKL4IPCBkAhDMEyyxaiQaD5JvTYOyLE5XGGNdoh0meUhzlt5llWgIQkMFRB9lDUzLgStjPWHRRHnAkIQJ0UIAYQcx4dD/6dCudNUT0HegKg4uV6sPO9qlJvjcbbepzclUolsUG+YmSNzGVrMyOlUSOGXqLP9fJcZa6uZE7nTargp+VpZspRpseYvigB2rRdNhHrNRFAYFL0Ur+kwqckSnxtaC0wZQpI1UC4FZdkyDIpkTNcTRdqri0XvX24Td8e7iGfUf3M+3ZSVaafs0GJljzetAKwuEfYJRPCa4tXsWmet64dtXuCgHhRvybq5DinWFsletpLQe+UkNJsuYXbwhAFNLWtYt22iyb6BtWjtULXOM2RosgyNVnLQ9awoWcRyMhxqhV2EBJfYIXbYkkHaD0gqDKhB8eKdo3TBUNuSirIVl824u2u1t/83ftTl/Mge9yHQ495f4naDqeARchJ4qKL0qbLSEeNNCUFCYkXClDKq9e1qQKId5nRWMkoecF0G37zKX6jfsab9aufic08udRU+MWyZD8b1PTJUlpLDC14cwIM3esrJe8dW+ShAkiFABUg/lQaTbvSWkWPKRh2bd+L06Q8vll/FcyfIcANx5trYT0FVn5PbXe4q63G7MELuWT759Ib9Py071Hx26wev7E4gmu/Y99fP73/x9WFuwoFla6np27Yf3Lz1/PmXflhz8MU/E8+tn3Rx1++rjmV+G43tfWHT/iXrappqJ0bp3dU19x89vm4xd/THyWOupb9rq1KmbT55DAf1b32ZztGHo/WfrHj56ccXH5/T4X172IVf40vPCqs3Xt4VznSfG5E8tGn9G3NPjBh15LX0E5X+cfFn5waSKz/T9rx+ZfTzlzYO+2p1Yvv3JY+hhWf2XXp3zPxh8Z2nPj46c2ECr4i2V7vWzm19b9kfu+at2rtnUQ39zsTpFSM/Wl7dcF/H59lxp062Tjm8bWfdo41vsuy06g0Tjii5A+VXLpSuX0n/sqN3Lf8GEbNvL/wRAAA=',
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
    return(
        <Col lg={12}>
        <section className="products" id="products">
          <h2>Bedroom</h2>
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

export default Bedroom;