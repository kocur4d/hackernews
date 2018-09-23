import styled from 'styled-components'
import { Link } from "react-router-dom";

export default styled(Link)`
  width: 150px;
  padding: 5px 0;
  display: inline;
  text-decoration: none;
  font-style: italic;
  color: #7f8c8d;
  :hover {
    text-decoration: underline;
  }
`
