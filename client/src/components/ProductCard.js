// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Hr from 'react-native-hr-component'

//creates a product card to display on page with product information
export const ProductCard = ({ name, price, category, image, link}) => {
    return (
        <Col className='product_card col-auto'>
            <a href={link} target="_blank" rel="noreferrer">
            <div style={{backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat"}} className='product_background'>
            <div className='product_pricebox'>
            <span className='product_price'>${price}</span><br></br>
            </div>
            <div className='product_content'>
                <h4 className='product_heading'>{name}</h4>
                {/* <div style={{ flex: 1, backgroundColor: "#6F38C5", height: "3px" }} /> */}
                <span className='product_subCategory'>Sub-Category: {category}</span>
                </div>
            </div>
            </a>
        </Col>
    )
};
