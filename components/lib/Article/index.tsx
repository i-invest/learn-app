/* eslint-disable @next/next/no-img-element */
import styled from "@emotion/styled";
import React from "react";
import { DataProps } from "../types";

interface SlideProps {
  data: DataProps;
}

const Article = (props: SlideProps) => {
  const { data } = props;

  return (
    <React.Fragment>
      <Container href={data.url}>
        <div className="img-container">
          <img
            className="img-thumbnail"
            loading="lazy"
            src={data.thumbnail}
            alt="I-Invest"
          />
        </div>
        <div className="text-content">
          <h3 className="item-title">{data.title}</h3>
          <div className="item-footer">
            <span>
              {data.date} {(data?.duration && data.duration.length > 0) ? "- " + data.duration : "" }
            </span>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Article;

const Container = styled.a`
  display: block;
  max-width: 396px;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  height: 420px;
  transition: all ease-out 0.2s;
  margin-bottom: 0.5rem;
  .img-container {
    height: 260px;
    position: relative;
    overflow: hidden;
    .img-thumbnail {
      height: 100%;
      width: 100%;
      object-fit: cover;
      transition: scale ease-out 0.6s;
    }
    @media (max-width: 400px) {
      height: 200px;
    }
  }
  .text-content {
    padding: 5% 3%;
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
    .img-thumbnail {
      scale: 1.2;
    }
  }

  @media (max-width: 768px) {
    margin: 1rem auto;
  }

  @media (max-width: 600px) {
    max-width: unset;
    height: auto;
  }
`;
