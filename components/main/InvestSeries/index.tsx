"use client";
import React, { ChangeEvent } from "react";
import { DataProps } from "../../lib/types";
import { motion } from "framer-motion";
import { CircularProgress, Grid } from "@mui/material";
import animate from "../../lib/animate";
import Slide from "../../lib/Slide";
import styled from "@emotion/styled";
import { Container, Title } from "../../lib";

interface InvestSeriesProps {
  data: DataProps[];
}

const InvestSeries = ({ data }: InvestSeriesProps) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [category, setCategory] = React.useState<string>("equities");
  const [items, setItems] = React.useState<DataProps[]>([]);
  const [itemsNumber, setItemsNumber] = React.useState<number>(3);

  const handleCategoryChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setCategory(target?.value);
    setItemsNumber(3);
  };

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (itemsNumber + 3 < items.length) {
        setItemsNumber(itemsNumber + 3);
      } else if (itemsNumber + 3 >= items.length) {
        setItemsNumber(items.length);
      }
    }, 1200);
  };

  React.useEffect(() => {
    const filteredItems = data
      .filter((item) => item.type === "videos" && item.category === category)
      .sort((a, b) => a.title.localeCompare(b.title));
    setItems(filteredItems);
  }, [category, data]);

  return (
    <Wrapper>
      <Container>
        <div className="title-bar">
          <Title>Learn how to invest</Title>
          <div className="select-container">
            <select value={category} onChange={handleCategoryChange}>
              <option value="equities">Equities</option>
              <option value="fixed">Fixed deposit</option>
              <option value="tbills">Treasury bills</option>
            </select>
          </div>
        </div>
        <motion.div {...animate({ duration: 0.5 })}>
          <Grid container spacing={3} sx={{ mt: 4 }}>
            {items
              .filter((item) => {
                if (category.trim().length === 0) return item;
                if (
                  item.category?.toLowerCase().includes(category.toLowerCase())
                )
                  return item;
              })
              .slice(0, itemsNumber)
              .map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                  <Slide data={item} />
                </Grid>
              ))}
          </Grid>
        </motion.div>
        <React.Fragment>
          {items.length > 3 && (
            <ButtonContainer as={motion.div} {...animate({})}>
              <button
                onClick={handleClick}
                disabled={itemsNumber === items.length}
              >
                {loading ? (
                  <CircularProgress sx={{ color: "#ffffff" }} size="1.75rem" />
                ) : (
                  "Load more"
                )}
              </button>
            </ButtonContainer>
          )}
        </React.Fragment>
      </Container>
    </Wrapper>
  );
};

export default InvestSeries;

const Wrapper = styled.section`
  padding: 4rem 5%;

  @media (max-width: 600px) {
    padding: 4rem 5%;
  }

  .title-bar {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: space-between;
  }

  .select-container {
    border: 2px solid #b8bbc2;
    border-radius: 0.5rem;
    padding: 0.75rem;
    width: 100%;
    max-width: 12.5rem;
  }

  .select-container select {
    border: none;
    outline: none;
    background: transparent;
    width: 100%;
    cursor: pointer;
    color: #313144;
    font-size: 1.25rem;
    font-family: Poppins, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: 0.5px;
  }

  @media (max-width: 768px) {
    .title-bar {
      display: grid;
      gap: 2rem;
    }
  }
`;

const ButtonContainer = styled.div`
  display: grid;
  place-items: center;
  margin-top: 1rem;
  button {
    all: unset;
    background: #858585;
    color: #ffffff;
    border-radius: 0.625rem;
    font-size: 1rem;
    font-family: Poppins, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-style: normal;
    font-weight: 600;
    cursor: pointer;
    width: 10rem;
    height: 3.5rem;
    display: grid;
    place-items: center;
    &:disabled {
      background-color: #85858580;
      cursor: default;
    }
  }
`;