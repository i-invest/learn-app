/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";
import animate from "../../lib/animate";
import "./style.css";
import { DataProps } from "../../lib/types";
import { Close } from "@mui/icons-material";
import Result from "./Result";

interface Props {
  data: DataProps[];
}

const Hero = ({ data }: Props) => {
  const [showResults, setShowResults] = React.useState<boolean>(true);
  const [searchFilter, setSearchFilter] = React.useState<string>("");

  const onSearchFilterChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setSearchFilter(target.value);
  };

  const [searchResults, setSearchResults] = React.useState<DataProps[]>([]);

  const [search, setSearch] = React.useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const { value } = target;
    if (value.trim().length > 0) {
      if (!showResults) setShowResults(true);
    }
    if(value.trim().length === 0) setShowResults(false);
    const results = data.filter((item: DataProps) => {
      if (searchFilter.trim().length === 0 && value.trim().length === 0)
        return null;
      if (searchFilter.trim().length > 0 && value.trim().length === 0)
        return null;
      if (
        item.type.toLowerCase().includes(searchFilter.trim().toLowerCase()) &&
        item.title.toLowerCase().includes(value.trim().toLowerCase())
      )
        return item;
    });
    setTimeout(() => setSearchResults(results), 300);
    setSearch(value);
  };

  const closeSearch = () => {
    setSearch("");
    setShowResults(false);
  };

  return (
    <section className="hero-wrapper">
      <div className="hero-container">
        <motion.div {...animate({})}>
          <h1 className="hero-title">
            The knowledge needed to thrive, right at your fingertips.
          </h1>
          <div className="search-form">
            <div className="select-input">
              <select onChange={onSearchFilterChange} value={searchFilter}>
                <option value="">All items</option>
                <option value="articles">Articles</option>
                <option value="podcasts">Podcasts</option>
                <option value="videos">Videos</option>
              </select>
            </div>
            <div className="search-box">
              <input
                type="text"
                placeholder="Search..."
                onChange={handleSearchChange}
                value={search}
              />
            </div>
            <button className="search-icon" type="submit">
              {search.trim().length > 0 ? (
                <Close sx={{ color: "#ffffff" }} onClick={closeSearch} />
              ) : (
                <img
                  src="/assets/icons/search.svg"
                  draggable={false}
                  alt="search-icon"
                />
              )}
            </button>
            <div className="search-results" style={{ display: showResults ? "" : "none" }}>
              {searchResults.length > 0 &&
                searchResults.map((item) => (
                  <Result key={item.id} data={item} />
                ))}
            </div>
          </div>
        </motion.div>
        <motion.div {...animate({})} className="hero-img">
          <img
            src="/assets/img/hero-img.png"
            loading="lazy"
            draggable={false}
            alt=""
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
