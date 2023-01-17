import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default User = ({name, email, items}) => {
    return(
        <Col className="col-auto">
            <div className="userCard">
                <h4>{name}</h4>
                <h4>{email}</h4>
                <div className="posts">
                    {items}
                </div>
            </div>
        </Col>
    );
}//working on it (JL) feel free to add on