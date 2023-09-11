import styled from "@emotion/styled";

export const Wrapper = styled.section`
  padding: 4rem 5%;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
`;

export const HeroText = styled.h1`
  background: linear-gradient(
    45deg,
    rgb(142, 216, 255) 0%,
    rgb(103, 204, 255) 29%,
    rgb(133, 31, 153) 50%,
    rgb(202, 102, 223) 73%,
    rgb(216, 140, 230) 100%
  );
  font-size: 4rem;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: Poppins, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 500;
  line-height: 130%;
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

export const Title = styled.h2`
  color: #000;
  font-size: 2rem;
  font-family: Poppins, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 500;
  line-height: 100%;
  @media (max-width: 600px) {
    font-size: 1.625rem;
  }
`;
