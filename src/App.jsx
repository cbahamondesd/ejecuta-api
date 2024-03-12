import React, { useState, useEffect } from 'react';
import axios from "axios";
import Pokemones from './Components/pokemones';

const client = axios.create({
  baseURL : "https://pokeapi.co/api/v2/pokemon"
});

export default function App() {
  const [pokemones, setPokemones] = useState([]);

  const fetchPokemones = () => {
    client.get("?limit=807&offset=0").then((response)=>{
      setPokemones(response.data.results);
    });
};

  return (
    <>
      <h1>API Pokemones</h1>
      <input type="button" name="btn_buscar" onClick={fetchPokemones} value="Fetch Pokemon" />
      <Pokemones pokemones={pokemones} />
    </>
  )
}

