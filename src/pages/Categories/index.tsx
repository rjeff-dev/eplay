import { useEffect, useState } from 'react'
import { Game } from '../Home'
import ProductList from '../../components/ProductList'

import {
  useGetActionQuery,
  useGetRpgGameQuery,
  useGetSimulationGameQuery,
  useGetFightGameQuery,
  useGetSportGameQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionQuery()
  const { data: sportGames } = useGetSportGameQuery()
  const { data: simulationGames } = useGetSimulationGameQuery()
  const { data: fightGames } = useGetFightGameQuery()
  const { data: rpgGames } = useGetRpgGameQuery()

  if (actionGames && sportGames && simulationGames && fightGames && rpgGames) {
    return (
      <>
        <ProductList games={actionGames} title="Ação" background="black" />
        <ProductList games={sportGames} title="Esportes" background="gray" />
        <ProductList games={fightGames} title="Luta" background="black" />
        <ProductList games={rpgGames} title="RPG" background="gray" />
        <ProductList
          games={simulationGames}
          title="Simulação"
          background="black"
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categories
