"use client";
/* eslint-disable @next/next/no-img-element */
import { Container, Wrapper } from "../../lib";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import animate from "../../lib/animate";

const Kudi = () => {
  return (
    <Wrapper>
      <Container>
        <Section>
          <div className="img-wrapper">
            <motion.img
              {...animate({ duration: 0.5 })}
              src="/assets/img/kudi.png"
              alt="Kudi"
              draggable={false}
            />
          </div>
          <div className="kudi-text-content">
            <motion.h2
              {...animate({ duration: 0.7 })}
              className="kudi-text-title"
            >
              Get up to <span>11%</span> interest when you save with i-invest
            </motion.h2>
            <motion.div {...animate({ duration: 1 })} className="btn-row">
              <div className="store-btn">
                <a href="https://play.google.com/store/apps/details?id=com.cousant.naijainvest">
                  <img src="/assets/icons/play-store.png" alt="play store" />
                </a>
              </div>
              <div className="store-btn">
                <a href="https://apps.apple.com/ng/app/i-invest/id1381126486">
                  <img src="/assets/icons/app-store.png" alt="app store" />
                </a>
              </div>
            </motion.div>
          </div>
        </Section>
      </Container>
    </Wrapper>
  );
};

export default Kudi;

const Section = styled.section`
  background: linear-gradient(#4f78de50 0%, #825ee020 100%),
    url("/assets/img/pattern-bg.png");
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  box-shadow: 0px 4px 80px 30px rgba(0, 0, 0, 0.1);
  padding: 5% 5% 0 5%;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 2fr 5fr;
  gap: 2rem;
  .img-wrapper {
    overflow: clip;
    position: relative;
    img {
      max-width: 100%;
      min-width: 300px;
      position: relative;
      bottom: -0.5rem;
      height: auto;
      @media (max-width: 600px) {
        min-width: 0;
      }
    }
  }
  .kudi-text-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .kudi-text-title {
      color: #fff;
      font-size: 3rem;
      font-family: Poppins, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-weight: 500;
      line-height: 100%;
      letter-spacing: -0.5px;
      max-width: 670px;
      span {
        font-weight: 600;
        font-size: 5rem;
        line-height: 100%;
        @media (max-width: 600px) {
          font-size: 3rem;
        }
      }
      @media (max-width: 600px) {
        font-size: 2rem;
      }
    }

    .btn-row {
      display: flex;
      margin: 2rem 0;
      gap: 2rem;
      @media (max-width: 600px) {
        gap: 1rem;
      }
      .store-btn {
        width: 100%;
        max-width: 142px;
        a {
          display: block;
          width: 100%;
          img {
            cursor: pointer;
            max-width: 100%;
            transition: ease-out 0.2s;
          }
          &:hover img {
            scale: 0.9;
          }
        }
      }
    }
  }

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column-reverse;
    gap: 2rem;
    padding: 4rem 1rem 0 1rem;
    .img-wrapper {
      max-width: 22.5rem;
      margin: 0 auto;
    }
    .kudi-text-content {
      align-items: center;
      max-width: 430px;
      margin: 0 auto;
      .kudi-text-title {
        text-align: center;
      }
    }
  }
`;
