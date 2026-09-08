import { useDispatch } from 'react-redux'

import * as S from './style'

import Tag from '../Tag'
import Button from '../Button'

import { add, open } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'

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
    <S.Banner
      style={{
        backgroundImage: `url(${game.media.cover})`
      }}
    >
      <S.HeroContainer>
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>

        <S.Infos>
          <h2>{game.name}</h2>

          <p>
            {game.prices.discount && (
              <span>De {parseToBrl(game.prices.old)}</span>
            )}

            {game.prices.current && (
              <span>Por {parseToBrl(game.prices.current)}</span>
            )}
          </p>

          {game.prices.current && (
            <Button
              variant="primary"
              type="button"
              onClick={addCart}
              title="Carrinho"
            >
              Adicionar ao carrinho
            </Button>
          )}
        </S.Infos>
      </S.HeroContainer>
    </S.Banner>
  )
}

export default Hero
