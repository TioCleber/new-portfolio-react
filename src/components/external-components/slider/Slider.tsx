import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

interface Props {
  sliderElement: React.ReactElement[];
}

const Slider = ({ sliderElement }: Props) => {
  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        slidesPerView={1}
        className="mySwiper"
      >
        {sliderElement.map((SlideElement, index) => (
          <SwiperSlide key={index}>{SlideElement}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
