import styled from "styled-components";

export const StyledButton = styled.button`
  width: fit-content;
  height: 68px;
  padding: 20px 35px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 14px;
  font-size: 20px;
  font-weight: ${({ theme }) => theme.font.weights.regular};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;
