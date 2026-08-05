import { Banner, HeroContainer, Infos } from './style'
import { Game } from '../../pages/Home'
import Tag from '../Tag'
import Button from '../button'
import { formataPreco } from '../ProductList'
import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cart'

export type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
    <Banner
      style={{
        backgroundImage: `url(${game.media.cover})`
      }}
    >
      <HeroContainer>
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>De {formataPreco(game.prices.old)}</span>
            )}
            {game.prices.current && (
              <>Por {formataPreco(game.prices.current)}</>
            )}
          </p>
          {game.prices.current && (
            <Button
              variant="primary"
              type={'button'}
              onClick={addCart}
              title={'Carrinho'}
            >
              Adicionar ao carrinho
            </Button>
          )}
        </Infos>
      </HeroContainer>
    </Banner>
  )
}

export default Hero
