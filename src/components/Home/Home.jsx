import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Home.css';
import { faAngleLeft, faAngleRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import placeData from '../../fakeData/pleaceData';
import Card from '../Card/Card';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import Background from '../Background/Background';

const Home = () => {
    const [place] = useState(placeData);
    const [selected, setSelected] = useState(() => place[0]);
    const navigate = useNavigate();

    const selectNext = () => {
        const next = Number(selected.placeId) + 1;
        if (next > place.length) {
            return;
        }
        setSelected(place.find(p => Number(p.placeId) === next));
    }
    const selectPrev = () => {
        const next = Number(selected.placeId) - 1;
        if (next < 1) {
            return;
        }
        setSelected(place.find(p => Number(p.placeId) === next));
    }
    const handleBooking = placeId => {
        navigate('/book/' + placeId);
    }
    return (
        <div style={{ height: '100vh' }}>
            <Background />
            <div className="container" style={{ display: 'block', height: '100%' }}>
                <div className="content">
                    <div className="top">
                        <div className="left">
                            <h1>{selected.name}</h1>
                            <p>{selected.shortDescription}</p>
                            <button className='primary-button' onClick={() => handleBooking(selected.placeId)}>
                                <span style={{ marginRight: '6px' }}>Booking</span>
                                <FontAwesomeIcon style={{ verticalAlign: 'middle' }} icon={faArrowRight} />
                            </button>
                        </div>
                        <div className="right">
                            {
                                place.map((p) => <Card specialClass={(selected.placeId == p.placeId) ? 'active' : ''} key={p.placeId} position={selected.placeId} place={p}></Card>)
                            }
                        </div>
                    </div>
                    <div className="bottom">
                        <button className='circle-button' onClick={selectPrev}><FontAwesomeIcon icon={faAngleLeft} /></button>
                        <button className='circle-button' style={{ marginLeft: '14px' }} onClick={selectNext}><FontAwesomeIcon icon={faAngleRight} /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;