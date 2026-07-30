import { useEffect, useState } from 'react'

import { Game } from '../../pages/Home'

import { Imagem, Titulo, Precos } from './styles'
import Tag from '../Tag'
import Button from '../button'
import { formataPreco } from '../ProductList'

import { useGetFeaturedGameQuery } from '../../services/api'

const Banner = () => {
  const { data, isLoading } = useGetFeaturedGameQuery()

  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/eplay/destaque').then((resp) =>
      resp.json().then((res) => setGame(res))
    )
  }, [])

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <Imagem bg={game.media.cover}>
      <div className="container">
        <div>
          <Tag size="big">Destaque do dia</Tag>
          <Titulo>{game.name}</Titulo>
          <Precos>
            De <span>{formataPreco(game.prices.old)}</span> <br />
            por apenas {formataPreco(game.prices.current)}
          </Precos>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Click aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner
