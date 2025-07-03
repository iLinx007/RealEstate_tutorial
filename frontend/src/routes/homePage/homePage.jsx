import './homePage.scss';

function HomePage() {
  return (
    <div className="homePage">
        <div className="textContainer">
            <div className="wrapper">
                <h1>Find Real Estate & Get Your Dream Home</h1>
            </div>
        </div>
        <div className="imageContainer">
            <img src="/bg.png" alt="backGround_image" />
        </div>
    </div>
  );
}

export default HomePage;