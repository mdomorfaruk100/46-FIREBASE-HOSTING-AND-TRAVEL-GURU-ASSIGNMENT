import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Hotel.css';

const Hotel = ({ hotel }) => {
    const { image, title, Room, feature, cancellation, rating, price, total } = hotel;
    return (
        <div className='hotel-item-container'>
            <div className="left">
                <img src={image} alt="" />
            </div>
            <div className="right">
                <div className="hotel-info">
                    <h3>{title}</h3>
                    <p>{Room}</p>
                    <p>{feature}</p>
                    <p>{cancellation}</p>
                </div>
                <div className="rating-price-info">
                    <div className="star">
                        <FontAwesomeIcon style={{color:'#FFBF00', fontSize:'21px'}} icon={faStar} />
                        <span>{rating}</span>
                    </div>
                    <div className="price">
                        <p>{price.split('/')[0]}/<span>night</span></p>
                        <p className='total'>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hotel;