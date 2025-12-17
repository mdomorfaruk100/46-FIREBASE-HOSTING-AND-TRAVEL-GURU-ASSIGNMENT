import backgroundImage from '../../assets/Rectangle 1.png';

const Background = () => {
    return (
        <div className="background" style={{ backgroundImage: `url(${backgroundImage})`, height: '100%' }}>
            <div className="overlay"></div>
        </div>
    );
};

export default Background;