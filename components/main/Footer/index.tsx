"use client";
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import styled from "@emotion/styled";
import { Container, Wrapper } from "../../lib";
import { Divider, Grid } from "@mui/material";
import { motion } from "framer-motion";
import animate from "../../lib/animate";

const Footer = () => {
  return (
    <Wrapper>
      <Container as={motion.div} {...animate({})}>
        <Grid container spacing={4}>
          <Grid item xs={6} sm={6} md={3}>
            <SectionTitle>Products</SectionTitle>
            <Link href="https://i-investng.com/treasury-bills/">
              Treasury Bills
            </Link>
            <Link href="https://i-investng.com/equities/">Equities</Link>
            <Link href="https://i-investng.com/fixed-deposits/">
              Fixed Deposits
            </Link>
            <Link href="https://i-investng.com/eurobonds/">Eurobonds</Link>
            <Link href="https://i-investng.com/savings/">Savings</Link>
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <SectionTitle>About us</SectionTitle>
            <Link href="https://i-investng.com/about-us/">Our Company</Link>
            <Link href="https://i-investng.com/about-us/#news">
              In the News
            </Link>
            <Link href="https://i-investng.com/learn/#videos">Events</Link>
            <Link href="https://i-investng.com/terms-and-conditions/">
              Terms of Service
            </Link>
            <Link href="https://i-investng.com/privacy-policy/">
              Privacy Policy
            </Link>
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <SectionTitle>Support</SectionTitle>
            <Link href="https://i-investng.com/learn/">Learn</Link>
            <Link href="https://client.i-investng.com/account/register">
              Getting Started
            </Link>
            <Link href="https://i-investng.com/contact-us/">Contact Us</Link>
            <Link href="https://i-investng.com/faqs/">FAQs</Link>
            <Link href="https://t.me/+sE_l6-xUcFRjZGZk" target="_blank">
              Join Investment
              <br />
              Community
            </Link>
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <SectionTitle align="right">Our Address</SectionTitle>
            <Link href="https://goo.gl/maps/ynvvRvQhfDzSxQSF9" align="right">
              22a Udi Street, Osborne
              <br />
              Foreshore, Ikoyi, Lagos.
            </Link>
            <Link href="tel:+23417004000" align="right">
              + 234 1 700 4000
            </Link>
            <Link href="mailto:enquiries@i-investng.com" align="right">
              enquiries@i-investng.com
            </Link>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <Link
                  href="https://www.facebook.com/iinvestng"
                  target="_blank"
                  align="right"
                >
                  <img src="/assets/icons/facebook.gif" />
                </Link>
              </Grid>
              <Grid item xs={2}>
                <Link
                  href="https://www.instagram.com/iinvestng"
                  target="_blank"
                  align="right"
                >
                  <img src="/assets/icons/instagram.gif" />
                </Link>
              </Grid>
              <Grid item xs={2}>
                <Link
                  href="https://twitter.com/iinvestng"
                  target="_blank"
                  align="right"
                >
                  <img src="/assets/icons/twitter.gif" />
                </Link>
              </Grid>
              <Grid item xs={2}>
                <Link
                  href="https://www.linkedin.com/company/i-investng/"
                  target="_blank"
                  align="right"
                >
                  <img src="/assets/icons/linkedin.gif" />
                </Link>
              </Grid>
              <Grid item xs={2}>
                <Link
                  href="https://www.youtube.com/@iinvestng"
                  target="_blank"
                  align="right"
                >
                  <img src="/assets/icons/youtube.gif" />
                </Link>
              </Grid>
              <Grid item xs={2}>
                <Link
                  href="https://t.me/+sE_l6-xUcFRjZGZk"
                  target="_blank"
                  align="right"
                >
                  <img src="/assets/icons/telegram.gif" />
                </Link>
              </Grid>
            </Grid>
            <Logo>
              <div>
                <p>Supported by</p>
                <img
                  src="/assets/img/sterling-logo.png"
                  alt="sterling logo"
                  draggable={false}
                />
              </div>
            </Logo>
          </Grid>
        </Grid>
        <Divider sx={{ mt: 6, background: "#9E9E9E" }} />
        <Div as={motion.div} {...animate({})}>
          <div className="footer-statement">
            <div className="logo">
              <a href="https://i-investng.com" target="_blank">
                <img src="/favicon.png" alt="i-invest logo" />
              </a>
            </div>
            <div className="statement-text">
              <p>
                i-invest is Nigeria&apos;s foremost digital platform for Treasury
                Bills, and now the preferred financial services marketplace in
                Africa. It gives you access to investment opportunities from
                various financial service providers within one safe and secure
                platform. i-invest is PCI-DSS compliant and has ISO 27001
                certification – the world&apos;s best-known standard for information
                security management systems.
              </p>
            </div>
          </div>
          <Grid container columnSpacing={8} rowSpacing={3} sx={{ mt: 0 }}>
            <Grid item xs={12} md={6} className="statement-text-small">
              <p>
                The i-invest mobile platform (“Platform”) is developed and
                managed by Parthian Partners Limited (“Parthian”), through which
                it provides users of the Platform (“Users”) with access to a
                broad range of financial service products such as Treasury
                Bills, Insurance, Fixed Deposit, Equities and Government Bonds.
                Parthian Partners Limited is is a company duly licensed by the
                Securities and Exchange Commission, Nigeria. The transactions
                and products provided on this Platform may give rise to capital
                risk and may not be suitable for all investors.
              </p>
            </Grid>
            <Grid item xs={12} md={6} className="statement-text-small">
              <p>
                It is strongly recommended, and shall be construed as the sole
                advice herein, that every User of the Platform seeks appropriate
                independent professional advice before acting or purchasing any
                of the Products contained herein, as Parthian Partners Limited
                (“Parthian”) provides no opinion or advice whatsoever including
                investment, financial, tax or legal and makes no representation
                or warranty about the suitability or profitability of any of the
                Products. The Products listed on the platform are products of
                third parties and not products guaranteed by Parthian.
              </p>
            </Grid>
          </Grid>
          <p className="footer-credit">
            © 2022 <a href="https://i-invest.com">i-invest</a>, All Rights
            Reserved
          </p>
        </Div>
      </Container>
    </Wrapper>
  );
};

export default Footer;

const SectionTitle = styled.h6<{ align?: string }>`
  font-weight: 600;
  font-family: Poppins, sans-serif;
  font-size: 24px;
  line-height: 1.25em;
  color: #183b56;
  margin: 25px 0;
  text-align: ${(props) => props.align || "left"};
  @media (max-width: 900px) {
    text-align: left;
  }
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const Link = styled.a<{ align?: string }>`
  text-decoration: none;
  color: #183b56;
  font-size: 16px;
  font-family: "Source Sans Pro", sans-serif;
  display: block;
  width: auto;
  margin-bottom: 13px;
  text-align: ${(props) => props.align || "left"};
  &:hover {
    background-image: -webkit-linear-gradient(
      45deg,
      rgb(142, 216, 255) 0%,
      rgb(103, 204, 255) 29%,
      rgb(133, 31, 153) 50%,
      rgb(202, 102, 223) 73%,
      rgb(216, 140, 230) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  img {
    width: 24px;
    @media (max-width: 600px) {
      padding: 4px;
      transition: scale ease-out 0.2s;
      &:hover {
        scale: 1.3;
      }
    }
  }
  @media (max-width: 900px) {
    text-align: left;
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: flex-end;
  div {
    position: relative;
    margin-top: 1rem;
    max-width: 200px;
    p {
      color: #183b56;
      margin-left: 30%;
      font-family: "Source Sans Pro", sans-serif;
      font-size: 14px;
      margin-bottom: -5%;
    }
  }
  @media (max-width: 900px) {
    justify-content: flex-start;
  }
`;

const Div = styled.div`
  max-width: 1220px;
  margin: 3rem auto 0 auto;
  .footer-statement {
    display: flex;
    text-align: left;
    gap: 1.5rem;
    .logo {
      max-width: 54px;
      img {
        width: 100%;
      }
    }
    @media (max-width: 600px) {
      flex-direction: column;
    }
  }
  .statement-text p {
    font-size: 14px;
    color: rgb(90, 113, 132);
  }
  .statement-text-small p {
    font-size: 12px;
    color: rgb(90, 113, 132);
  }
  p.footer-credit {
    font-size: 12px;
    font-family: Source Sans Pro, "Segoe UI", Tahoma, Geneva, Verdana,
      sans-serif;
    line-height: 160%;
    color: rgb(90, 113, 132);
  }
  p.footer-credit {
    margin-top: 2rem;
    a {
      color: inherit;
      text-decoration: none;
    }
  }
`;
