import RawContentEditable from 'react-contenteditable'
import styled from 'styled-components'

const ContentEditable = styled(RawContentEditable)`
  display: block;
  outline: none;
  margin: 0;
  padding: 0;
  p {
    margin: 0;
    padding: 0;
  }
`

export default ContentEditable
