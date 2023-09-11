/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";
import "./style.css";
import animate from "../../lib/animate";
import { Wrapper } from "../../lib";

const Join = () => {
  return (
    <Wrapper>
      <div className="section-container">
        <div className="join-wrapper">
          <div className="join-container">
            <motion.h1 {...animate({ duration: 0.3 })} className="join-title">
              Join a new generation of investors!
            </motion.h1>
            <motion.p {...animate({ duration: 0.7 })} className="join-subtext">
              Begin your journey towards financial freedom with i-invest
            </motion.p>
            <motion.div {...animate({ duration: 1 })} className="join-btn-row">
              <div className="store-btn">
                <a href="https://play.google.com/store/apps/details?id=com.cousant.naijainvest">
                  <img src="/assets/icons/play-store.png" alt="play-store" />
                </a>
              </div>
              <div className="store-btn">
                <a href="https://apps.apple.com/ng/app/i-invest/id1381126486">
                  <img src="/assets/icons/app-store.png" alt="app-store" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Join;
