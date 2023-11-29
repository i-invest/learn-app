"use client";
import React from 'react'
import { DataProps } from '../../lib/types';
import { CircularProgress, Grid } from '@mui/material';
import Slide from '../../lib/Slide';
import { motion } from 'framer-motion';
import animate from '../../lib/animate';
import styled from '@emotion/styled';
import { Container, Title } from '../../lib';

interface Props {
	data: DataProps[];
}

const Investing = ({ data }: Props) => {
	const [loading, setLoading] = React.useState<boolean>(false);
  const [itemsNumber, setItemsNumber] = React.useState<number>(3);
  const items: DataProps[] = data.sort((a, b) => a.title.localeCompare(b.title));

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (itemsNumber + 3 < items.length) {
        setItemsNumber(itemsNumber + 3);
      } else if (itemsNumber + 3 >= items.length) {
        setItemsNumber(items.length);
      }
    }, 1500);
  };


	return (
		<Wrapper>
			<Container>
			<Title>Investing 101</Title>
        <Grid container spacing={3} sx={{ mt: 4 }}>
          {items.slice(0, itemsNumber).map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Slide data={item} />
            </Grid>
          ))}
        </Grid>
        <React.Fragment>
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
        </React.Fragment>
			</Container>
		</Wrapper>
	)
}

export default Investing;

const Wrapper = styled.section`
  padding: 4rem 5%;

  @media (max-width: 600px) {
    padding: 2rem 5%;
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
