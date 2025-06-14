import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledInput = styled.input`
  height: 60px;
  gap: 10px;
  font-size: 18px;
  border-radius: 14px;
  padding: 18px 30px 18px 30px;
  border: 1px solid ${({ theme }) => theme.colors.black};
`;

export const StyledTextArea = styled.textarea`
  height: 190px;
  gap: 10px;
  font-size: 18px;
  border-radius: 14px;
  padding: 18px 30px 18px 30px;
  border: 1px solid ${({ theme }) => theme.colors.black};
`;

export const Label = styled.p`
  font-family: ${({ theme }) => theme.font.base};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.font.weights.regular};
  color: ${({ theme }) => theme.colors.black};
  cursor: default;
`;
