import styled from 'styled-components'

export const Heading = styled.h1`
  color: #0070c1;
  font-family: 'Bree Serif';
`
export const CustomButton = styled.button`
  color: ${props => (props.outline ? '#ffffff' : '#0070c1')};
  font-family: 'Bree Serif';
  border-radius: 10px;
  padding: 10px;
  margin-right: 10px;
  font-size: 18px;
  border-style: solid;
  border-color: #0070c1;
  background-color: ${props => (props.outline ? '#0070c1' : '#ffffff')};
  width: 120px;
`
