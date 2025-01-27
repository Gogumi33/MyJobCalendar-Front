import React from 'react'
import styled from 'styled-components';
import ScrapButton from '../utilities/ScrapButton';

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  width: 100%;
`

function ScrapButtonDiv({apiEndpoint, isScrapped, type}) {
  return (
      <Button>
        <ScrapButton apiEndpoint={apiEndpoint} isScrapped={isScrapped} type={type}/>
      </Button>
  )
}

export default ScrapButtonDiv;
