import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const ProductCard = ({ name, price, category}) => {
    return (
        <Col sm={2} md={4}>
            <div className='productCard'>
                <h4>{name}</h4>
                <span className='productText'>${price}</span>
                <br></br>
                <span>{category}</span>
            </div>
        </Col>
    )
};
