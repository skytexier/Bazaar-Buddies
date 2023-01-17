import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const ProductCard = ({ name, price, category, image, link}) => {
    return (
        <Col className='col-auto'>
            <div className='productCard'>
                <h4>{name}</h4>
                <a href={link} target="_blank" rel="noreferrer">
                <img className='productImg' alt='product' src={image}></img></a>
                <span className='productText'>${price}</span>
                <span className='subcategory'>Sub-Category: {category}</span>
            </div>
        </Col>
    )
};
