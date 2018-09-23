import styled from 'styled-components'

const Wrapper = styled.section`
  padding: 20px;
  background: ${({odd}) => odd ? 'white' : '#ecf0f1'};
  margin: 10px 0;
`

export default Wrapper
