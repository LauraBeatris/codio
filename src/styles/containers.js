import styled, { css } from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  justify-content: ${props => props.jc};
  align-items: ${props => props.ai};
  ${props =>
    props.full &&
    css`
      width: 100%;
    `}

  ${props =>
    props.paddingDesk &&
    css`
      padding: ${props.paddingDesk};
    `}

   ${props =>
     props.paddingMob &&
     css`
       @media (min-width: 300px) and (max-width: 767px) {
         padding: ${props.paddingMob};
       }
     `}
`;

export const GridContainer = styled.div`
  display: grid;
  ${props =>
    props.hasRows &&
    css`
      grid-template-rows: repeat(${props.rowsNumber}, ${props.rowLength});
    `}
  ${props =>
    props.hasColumns &&
    css`
      grid-template-columns: repeat(${props.colsNumber}, ${props.colLength});
    `}
`;
