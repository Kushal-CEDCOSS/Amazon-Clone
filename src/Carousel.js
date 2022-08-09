import Carousel from 'react-bootstrap/Carousel';

function CarouselMain() {
  return (
    <Carousel style={{height: '35vh', zIndex: '0'}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/JugJuggJeeyowithPD-style/3000x1200_Hero-Tall_NP_flap._CB631769135_.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/media/PrimeDay_2022/PC_Hero_3000x1200_Media_2x._CB631708623_.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/PD22TeaserFlapUpdated/DEA-PC_Hero_3000x1200._CB631769638_.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselMain;