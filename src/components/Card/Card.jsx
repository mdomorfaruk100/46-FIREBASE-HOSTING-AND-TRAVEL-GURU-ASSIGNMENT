import './Card.css';

const Card = ({ place, specialClass, position }) => {
    const newCommon = position > 1 ? ((position - 1) * 319.9) : 0
    const cardImage = {
        background: `url(${place.image})`
    }

    return (
        <div className='card' style={{ transform: `translateX(${place.placeId < position ? -(place.placeId - 1) * 319 : -newCommon}px)`, opacity: `${place.placeId < position ? 0 : 1}` }}>
            <div className={"card-content " + specialClass} style={cardImage}>
                <h2>{place.name}</h2>
            </div>
        </div>
    );
};

export default Card;