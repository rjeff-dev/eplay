import { Container, Title } from './style'
import { Container as S } from '../../styles'

export type Props = {
  title: string
  background: 'black' | 'gray'
  children: JSX.Element
}

const Section = ({ title, background, children }: Props) => (
  <Container background={background}>
    <S>
      <Title>{title}</Title>
      {children}
    </S>
  </Container>
)

export default Section
