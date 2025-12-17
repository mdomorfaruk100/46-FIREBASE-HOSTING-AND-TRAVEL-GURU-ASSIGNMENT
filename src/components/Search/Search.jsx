import { useContext } from 'react';
import './Search.css';
import { BookingContext } from '../../App';
import hotelData from '../../fakeData/hotelsData';
import Hotel from '../Hotel/Hotel';
import placeData from '../../fakeData/pleaceData';

const Search = () => {
    const { bookingId } = useContext(BookingContext);
    const hotels = hotelData.filter(hotel => Number(hotel.placeId) === Number(bookingId))
    const place = placeData.find(place => place.placeId == bookingId);
    return (
        <div className='main-wrapper'>
            <div className="container">
              <div className="search-content d-flex">
                  <div className="hotel-container">
                    <div className="hotel-header">
                        <p>252 stays Apr 13-17 {hotels.length} guests</p>
                        <h2>Stay in {place.name}</h2>
                    </div>
                    <div className="hotel-content">
                        {
                            hotels.map(hotel => <Hotel key={hotel.hotelId} hotel={hotel} />)
                        }
                    </div>
                </div>
                <div className="map-container">
                <h1>This is Google Maps Area</h1>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Search;