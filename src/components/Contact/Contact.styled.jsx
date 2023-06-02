import styled from 'styled-components';

export const ContactItem = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 10px;
`;

export const Name = styled.div`
  font-size: 14px;

  @media screen and (min-width: 420px) {
    font-size: 16px;
  }

  @media screen and (min-width: 620px) {
    font-size: 18px;
  }
`;

export const Button = styled.button`
  font-size: 14px;
  height: 24px;
  border-radius: 2px;
  border: 1px solid ${p => p.theme.colors.gray};
  text-transform: uppercase;
  font-weight: 700;
  color: ${p => p.theme.colors.orange};
  :hover {
    background-color: ${p => p.theme.colors.orange};
    color: ${p => p.theme.colors.white};
    box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.1);
    border: 1px solid ${p => p.theme.colors.gray};
  }
`;
