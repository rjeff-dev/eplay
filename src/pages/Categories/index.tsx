import ProductList from '../../components/ProductList'

import {
  useGetActionQuery,
  useGetRpgGameQuery,
  useGetSimulationGameQuery,
  useGetFightGameQuery,
  useGetSportGameQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } = useGetActionQuery()
  const { data: fightGames, isLoading: isLoadingFight } = useGetFightGameQuery()
  const { data: rpgGames, isLoading: isLoadingRPG } = useGetRpgGameQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGameQuery()
  const { data: sportGames, isLoading: isLoadingSport } = useGetSportGameQuery()

  return (
    <>
      <ProductList
        games={actionGames}
        title="Ação"
        background="black"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductList
        games={sportGames}
        title="Esportes"
        background="gray"
        id="sports"
        isLoading={isLoadingSport}
      />
      <ProductList
        games={fightGames}
        title="Luta"
        background="black"
        id="fight"
        isLoading={isLoadingFight}
      />
      <ProductList
        games={rpgGames}
        title="RPG"
        background="gray"
        id="rpg"
        isLoading={isLoadingRPG}
      />
      <ProductList
        games={simulationGames}
        title="Simulação"
        background="black"
        id="simulation"
        isLoading={isLoadingSimulation}
      />
    </>
  )
}

export default Categories
