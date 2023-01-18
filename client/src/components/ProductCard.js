import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export const ProductCard = ({ name, price, category, image, link}) => {
    return (
        <Col className='product_card'>
            <div style={{backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat"}} className='product-background'>
            <div className='product_content'>
                <h4 className='product_heading'>{name}</h4>
                <a href={link} target="_blank" rel="noreferrer">
                <span className='product_price'>${price}</span>
                <span className='product_subCategory'>Sub-Category: {category}</span></a>
                </div>
                </div>
        </Col>
    )
};
