import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default styled(Link)`
  font-size: 110%;
  font-weight: bold;
  color: white;
  margin-right: 10px;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`
