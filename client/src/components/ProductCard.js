import {Col, Row} from 'react-bootstrap'


export const ProductCard = ({ name, price, category}) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className='productCard'>
                <h4>{name}</h4>
                <span className='producText'>${price}</span>
                <br></br>
                <span>{category}</span>
            </div>
        </Col>
    )
};
