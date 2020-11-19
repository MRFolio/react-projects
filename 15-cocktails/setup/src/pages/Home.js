import React from "react";
import Cocktail from "../components/Cocktail";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
    <main>
      <SearchForm />
      <Cocktail />
    </main>
  );
};

export default Home;
