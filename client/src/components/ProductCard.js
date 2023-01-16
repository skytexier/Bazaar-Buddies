import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const ProductCard = ({ name, price, category}) => {
    return (
        <Col className='col-auto'>
            <div className='productCard'>
                <h4>{name}</h4>
                <span className='productText'>${price}</span>
                <br></br>
                <span>{category}</span>
            </div>
        </Col>
    )
};
