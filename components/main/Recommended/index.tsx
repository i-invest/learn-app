"use client";
import React from "react";
import { motion } from "framer-motion";
import animate from "../../lib/animate";
import Slide from "../../lib/Slide";
import SlideMobile from "../../lib/SlideMobile";
import Article from "../../lib/Article";
import { ArrowForward, ArrowBack } from "@mui/icons-material";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import { DataProps } from "../../lib/types";
import styled from '@emotion/styled';
import { Container, Title } from "../../lib";

interface Props {
	data: DataProps[];
}

SwiperCore.use([Pagination]);

const Recommended = ({ data }: Props) => {
	const [swiper, setSwiper] = React.useState<any>(null);
	const [btnStatus, setBtnStatus] = React.useState(0);
  const handlePrev = () => {
		setBtnStatus(0);
		swiper.slidePrev();
	}
  const handleNext = () => {
		setBtnStatus(1);
		swiper.slideNext();
	}

  return (
    <Wrapper>
      <Container>
        <motion.div {...animate({})} className="header-flex">
          <Title>Recommended for you</Title>
          <div className="carousel-buttons">
            <button
              onClick={handlePrev}
              style={{ background: btnStatus === 0 ? "#c4c4c4" : "" }}
            >
              <ArrowBack sx={{ color: btnStatus === 0 ? "#ffffff" : "" }} />
            </button>
            <button
              onClick={handleNext}
              style={{ background: btnStatus === 1 ? "#c4c4c4" : "" }}
            >
              <ArrowForward sx={{ color: btnStatus === 1 ? "#ffffff" : "" }} />
            </button>
          </div>
        </motion.div>
				<div className="slider-wrapper">
					<Swiper
						spaceBetween={32}
						loop={true}
						slidesPerView={3}
						onSwiper={(swiper: any) => setSwiper(swiper)}
					>
						<SwiperSlide>
							<Slide data={data[0]} />
						</SwiperSlide>
						<SwiperSlide>
							<Slide data={data[1]} />
						</SwiperSlide>
						<SwiperSlide>
							<Article data={data[2]} />
						</SwiperSlide>
					</Swiper>
				</div>
				<div className="mobile-slider-wrapper">
					<SlideMobile data={data[0]} />
					<SlideMobile data={data[1]} />
					<SlideMobile data={data[2]} />
				</div>
      </Container>
    </Wrapper>
  );
};

export default Recommended;

const Wrapper = styled.section`
	padding: 4rem 5%;

	.header-flex {
		display: flex;
		align-items: center;
		gap: 1rem;
		justify-content: space-between;
		margin-bottom: 2rem;
	}

	.carousel-buttons {
		display: flex;
		gap: 0.5rem;
	}

	.carousel-buttons button {
		all: unset;
		width: 3rem;
		height: 3rem;
		background-color: #f5f5f5;
		border-radius: 50%;
		display: grid;
		place-items: center;
		cursor: pointer;
	}

	.slider-wrapper {
		margin: 1rem 0;
	}

	.mobile-slider-wrapper {
		margin-top: 1rem;
		width: 100%;
		gap: 1rem;
		overflow-x: auto;
		scroll-snap-type: x mandatory;
		display: none;
	}

	.mobile-slider-wrapper::-webkit-scrollbar {
		display: none;
	}

	@media (max-width: 600px) {
		padding: 0 1% 2rem 5%;
		.carousel-buttons, .slider-wrapper {
			display: none;
		}
		.mobile-slider-wrapper {
			display: flex;
		}
	}
`;
