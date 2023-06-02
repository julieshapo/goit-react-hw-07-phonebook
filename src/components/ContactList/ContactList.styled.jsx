import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin-right: auto;
  padding: 15px;
`;

export const ErrorMsg = styled.div`
  color: ${p => p.theme.colors.error};
  font-size: 16px;
  margin-top: 30px;
`;
