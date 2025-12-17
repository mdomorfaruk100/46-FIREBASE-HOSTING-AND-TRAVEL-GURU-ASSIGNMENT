import './Booking.css';
import { useNavigate, useParams } from 'react-router';
import placeData from '../../fakeData/pleaceData';
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import Background from '../Background/Background';
import { useContext } from 'react';
import { BookingContext } from '../../App';

const Booking = () => {
    const { placeId } = useParams();
    const navigate = useNavigate();
    const {setBookingId} = useContext(BookingContext);
    const place = placeData.find(place => place.placeId === placeId);
    const time = new Date();
    const date = time.getDate();
    const month = time.getMonth();
    const year = time.getFullYear();
    const handleSubmit = event => {
        event.preventDefault();
        navigate('/search');
        // const bookingObj = {id: place.placeId, }
        setBookingId(place.placeId);
    }
    return (
        <div style={{ height: '100%' }}>
            <Background />
            <div className="container content">
                <div className="top">
                    <div className="left">
                        <h1>{place.name}</h1>
                        <p>{place.fullDescription}</p>
                    </div>
                    <div className="right">
                        <div className="form-container">
                            <form onSubmit={handleSubmit}>
                                <FormGroup style={{ marginBottom: '16px' }}>
                                    <FormLabel>Origin</FormLabel>
                                    <FormControl />
                                </FormGroup>
                                <FormGroup style={{ marginBottom: '16px' }}>
                                    <FormLabel>Destination</FormLabel>
                                    <FormControl defaultValue={place.name} disabled />
                                </FormGroup>
                                <FormGroup className='parent' style={{ marginBottom: '16px' }}>
                                    <FormGroup className='child-1'>
                                        <FormLabel>From</FormLabel>
                                        <FormControl type='date' defaultValue={`${year}-${month}-${date}`} />
                                    </FormGroup>
                                    <FormGroup className='child-2'>
                                        <FormLabel>To</FormLabel>
                                        <FormControl type='date' className='date' defaultValue={`${year}-${month}-${date + 11}`} />
                                    </FormGroup>
                                </FormGroup>
                                <FormGroup>
                                    <button className='primary-button extra-btn' >Start Booking</button>
                                </FormGroup>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;