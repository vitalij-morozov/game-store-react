import React from 'react';
import { useFilterContext } from '../context/FilterContext';
import GridView from './GridView';
import ListView from './ListView';

function GamesList() {
  const { filtered_games: games, grid_view: grid } = useFilterContext();

  if (games.length < 1) {
    <h5>Sorry, games matched your search</h5>;
  }
  if (grid === false) {
    return <ListView games={games} />;
  }

  return <GridView games={games}>GamesList</GridView>;
}

export default GamesList;
