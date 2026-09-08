import { useState } from 'react'

import Section from '../Section'

import play from '../../assets/images/botao-play.png'
import zoom from '../../assets/images/zoom.png'
import x from '../../assets/images/x.png'

import * as S from './style'

type Props = {
  defaultCover: string
  name: string
  itens: GalleryItem[]
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name, itens }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMidiaCover = (Item: GalleryItem) => {
    if (Item.type === 'image') return Item.url
    return defaultCover
  }

  const getMidiaIcon = (Item: GalleryItem) => {
    if (Item.type === 'image') return zoom
    return play
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Section title={'Galeria'} background={'black'}>
        <S.Items>
          {itens.map((media, index) => (
            <S.Item
              key={media.url}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
              <img
                src={getMidiaCover(media)}
                alt={`Mídia ${index + 1} de ${name}`}
              />
              <S.Action>
                <img
                  src={getMidiaIcon(media)}
                  alt="Clique para maximar a midia"
                />
              </S.Action>
            </S.Item>
          ))}
        </S.Items>
      </Section>

      <S.Modal className={modal.isVisible ? 'visivel' : ''}>
        <S.MotalContent>
          <S.HeaderModal>
            <h4>{name}</h4>
            <img
              src={x}
              alt="icone de fechar"
              onClick={() => {
                closeModal()
              }}
            />
          </S.HeaderModal>
          {modal.type === 'image' ? (
            <img src={modal.url} alt="" />
          ) : (
            <iframe frameBorder={0} src={modal.url}></iframe>
          )}
        </S.MotalContent>
        <div
          onClick={() => {
            closeModal()
          }}
          className="overlay"
        ></div>
      </S.Modal>
    </>
  )
}

export default Gallery
