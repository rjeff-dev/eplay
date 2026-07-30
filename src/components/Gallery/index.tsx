import { useState } from 'react'

import Section from '../Section'
import { GalleryItem } from '../../pages/Home'
import { Item, Items, Action, Modal, HeaderModal, MotalContent } from './style'

import hogwarts from '../../assets/images/Hogwarts-Legacy1.png'
import spiderman from '../../assets/images/banner-homem-aranha.png'
import play from '../../assets/images/botao-play.png'
import zoom from '../../assets/images/zoom.png'
import x from '../../assets/images/x.png'

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'image',
    url: spiderman
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/9iy6gHDKvzA?si=j35bR_QuZZVsOn5K'
  }
]

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
        <Items>
          {itens.map((media, index) => (
            <Item
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
              <Action>
                <img
                  src={getMidiaIcon(media)}
                  alt="Clique para maximar a midia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>

      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <MotalContent>
          <HeaderModal>
            <h4>{name}</h4>
            <img
              src={x}
              alt="icone de fechar"
              onClick={() => {
                closeModal()
              }}
            />
          </HeaderModal>
          {modal.type === 'image' ? (
            <img src={modal.url} alt="" />
          ) : (
            <iframe frameBorder={0} src={modal.url}></iframe>
          )}
        </MotalContent>
        <div
          onClick={() => {
            closeModal()
          }}
          className="overlay"
        ></div>
      </Modal>
    </>
  )
}

export default Gallery
