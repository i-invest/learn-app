/* eslint-disable @next/next/no-img-element */
import styled from "@emotion/styled";
import Video from "../Video";
import React from "react";
import { DataProps } from "../types";

interface SlideProps {
  data: DataProps;
}

const Slide = (props: SlideProps) => {
  const { data } = props;
  const [videoModal, setVideoModal] = React.useState<boolean>(false);

  return (
    <React.Fragment>
      <Container>
        <div className="img-container">
          <img
            className="img-thumbnail"
            loading="lazy"
            src={data.thumbnail}
            alt=""
          />
          <>
            {data.type === "videos" && (
              <div className="play-btn">
                <img
                  src="/assets/icons/play-btn.svg"
                  draggable={false}
                  onClick={() => {
                    setVideoModal(true);
                  }}
                  alt="Play button"
                />
              </div>
            )}
          </>
        </div>
        <div className="text-content">
          {data?.category && data?.category.trim().length > 0 && (
            <p className="item-category">{data?.category}</p>
          )}
          <h3 className="item-title">{data.title}</h3>
          <div className="item-footer">
            {data?.date && data.date.trim().length > 1 && data.date}
            {data?.duration &&
              data.duration.trim().length > 1 &&
              " - " + data.duration}
          </div>
        </div>
      </Container>
      <React.Fragment>
        {videoModal && (
          <Video
            open={videoModal}
            close={() => setVideoModal(!videoModal)}
            data={data}
          />
        )}
      </React.Fragment>
    </React.Fragment>
  );
};

export default Slide;

const Container = styled.div`
  max-width: 396px;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  transition: all ease-out 0.2s;
  min-height: 420px;
  .img-container {
    /* height: 55%; */
    height: 260px;
    position: relative;
    overflow: hidden;
    @media (max-width: 400px) {
      height: 200px;
    }
    .img-thumbnail {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
    .play-btn {
      position: absolute;
      z-index: 3;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      display: grid;
      place-items: center;
      transition: scale ease-out 0.2s;
      img {
        width: 5rem;
        cursor: pointer;
      }
      &:hover {
        scale: 1.2;
      }
    }
  }
  .text-content {
    padding: 5% 3%;
    .item-category {
      color: #5d2370;
      font-size: 11px;
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 2.4px;
      text-transform: uppercase;
      margin-bottom: 0.5rem;
    }
    .item-title {
      color: #000;
      font-size: 1.25rem;
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      line-height: 130%;
      @media (max-width: 768px) {
        font-size: 1rem;
      }
    }
    .item-footer {
      margin: 0.75rem 0;
      color: #858585;
      font-size: 11px;
      font-family: Poppins;
      font-weight: 500;
      text-transform: uppercase;
    }
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }

  @media (max-width: 768px) {
    margin: 1rem auto;
  }

  @media (max-width: 600px) {
    max-width: unset;
    min-height: unset;
  }
`;
