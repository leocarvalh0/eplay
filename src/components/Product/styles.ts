import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled(Link)`
  padding: 8px;
  border-radius: 8px;
  position: relative;
  text-decoration: none;
  color: ${cores.branca};
  display: block;
  background-color: ${cores.cinza};

  img {
    display: block;
    width: 100%;
    height: 280px;
    object-fit: cover;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
