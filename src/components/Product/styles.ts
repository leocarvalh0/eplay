import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled(Link)`
  padding: 8px;
  border-radius: 8px;
  position: relative;
  text-decoration: none;
  color: ${colors.white};
  display: block;
  background-color: ${colors.gray};
  height: 100%;

  img {
    display: block;
    width: 100%;
    height: 280px;
    object-fit: cover;
  }
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`

export const Description = styled.p`
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
