import React from "react";
import styled from "@emotion/styled";
import Video from "../../lib/Video";
import { DataProps } from "../../lib/types";

interface ResultProps {
  data: DataProps;
}

const Result = ({ data }: ResultProps) => {
  const [videoModal, setVideoModal] = React.useState<boolean>(false);
  const openVideo = () => setVideoModal(true);

  return (
    <React.Fragment>
      <ResultWrapper>
        <div className="container">
          <div className="result-description">
            <h3 className="result-title">{data.title}</h3>
            <p className="summary">
              {data.summary &&
                data.summary?.split(" ").slice(0, 15).join(" ") + "..."}
            </p>
            <div className="details">
              <span className="result-type">{data.type}</span>
              <span className="result-category">
                {data?.category &&
                  data?.category.length > 2 &&
                  " | " +
                    (data?.category === "fixed"
                      ? "fixed deposits"
                      : data.category)}
              </span>
            </div>
          </div>
          <>
            {data.type === "videos" ? (
              <Button onClick={openVideo}>Watch</Button>
            ) : data.type === "articles" ? (
              <Button href={data?.url}>Read</Button>
            ) : (
              <Button href="#podcast">Listen</Button>
            )}
          </>
        </div>
      </ResultWrapper>
      {videoModal && (
        <Video
          open={videoModal}
          close={() => setVideoModal(false)}
          data={data}
        />
      )}
    </React.Fragment>
  );
};

export default Result;

const ResultWrapper = styled.div`
  padding: 1rem;
  border: 1px solid #e2e2e2;
  border-radius: 4px;
  &:hover {
    background-color: rgba(33, 35, 38, 0.05);
  }
  .container {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: space-between;
    .result-description {
      max-width: 500px;
      margin-top: 0.25rem;
      .summary {
        font-family: Source Sans Pro, "Segoe UI", Tahoma, Geneva, Verdana,
          sans-serif;
        font-size: 12px;
      }
      .details {
        span {
          text-transform: uppercase;
          font-size: 0.875rem;
          font-family: Source Sans Pro, "Segoe UI", Tahoma, Geneva, Verdana,
            sans-serif;
          letter-spacing: 0.5px;
          color: #2e2e2e;
          font-size: 12px;
        }
        .result-type {
          display: inline-block;
          margin-top: 0.5rem;
          font-size: 12px;
        }
      }
    }
  }
  .result-title {
    font-size: 14px;
    line-height: 120%;
    font-weight: 500;
    font-family: Poppins, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    color: rgba(0, 0, 0, 0.7);
  }
`;

const Button = styled.a`
  all: unset;
  cursor: pointer;
  background-color: #5d2370;
  display: inline-block;
  min-width: 5rem;
  max-width: 5rem;
  border-radius: 6px;
  border: 1px solid #5d2370;
  color: #ffffff;
  font-family: Source Sans Pro, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  transition: ease-out 0.2s;
  text-align: center;
  padding: 0.75rem 0;
  &:hover {
    background-color: #5d2370cc;
  }
`;
