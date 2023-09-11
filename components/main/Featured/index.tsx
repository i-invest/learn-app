"use client";
import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Container, Title, Wrapper } from "../../lib";
import { Grid } from "@mui/material";
import ReactPaginate from "react-paginate";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import animate from "../../lib/animate";
import Article from "../../lib/Article";
import { DataProps } from "../../lib/types";

interface Props {
  data: DataProps[];
}

const Featured = ({ data }: Props) => {
  // pagination
  const itemsPerPage = 3;
  const [itemOffset, setItemOffset] = React.useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const articles = data.filter((items) => items.type === "articles");
  const currentItems = data
    .filter((item) => item.type === "articles")
    ?.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(articles?.length / itemsPerPage);
  const pageChange = (e: { selected: number }) => {
    const newOffset = (e.selected * itemsPerPage) % articles.length;
    setItemOffset(newOffset);
  };

  return (
    <Wrapper>
      <Container>
        <Title as={motion.h2} {...animate({})}>
          Featured Articles
        </Title>
        <Articles as={motion.div} {...animate({})}>
          <Grid container spacing={3}>
            {currentItems?.map((item) => (
              <Grid key={item.id} item xs={12} sm={6} md={4}>
                <Article data={item} />
              </Grid>
            ))}
          </Grid>
          <ReactPaginate
            onPageChange={pageChange}
            pageCount={pageCount}
            previousLabel={<ArrowBackIos />}
            nextLabel={<ArrowForwardIos />}
            containerClassName={"react-paginate"}
            pageLinkClassName={"react-paginate-item"}
            activeClassName={"currentPage"}
          />
        </Articles>
      </Container>
    </Wrapper>
  );
};

export default Featured;

const Articles = styled.div`
  margin-top: 3rem;
  .react-paginate {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin: 2rem 0 1rem 0;
    .react-paginate-item {
      font-family: Source Sans Pro, "Segoe UI", Tahoma, Geneva, Verdana,
        sans-serif;
      color: #858585;
      padding: 0.375rem 0.5rem;
      cursor: pointer;
      font-size: 0.875rem;
      display: inline-block;
      border: 1px solid #851f9930;
      border-radius: 0.25rem;
    }
    .next,
    .previous {
      display: grid;
      place-items: center;
      cursor: pointer;
      margin-bottom: -0.25rem;
      svg {
        font-size: 1rem;
        color: #858585;
      }
      &:disabled {
        background-color: rgba(33, 63, 125, 0.04);
      }
    }
    .currentPage {
      font-weight: 800;
      color: #ffffff !important;
      background: #851f9920;
      border-radius: 0.25rem;
    }
  }
`;
