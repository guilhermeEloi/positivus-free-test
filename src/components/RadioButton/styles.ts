import styled from "styled-components";

export const RadioButtonContainer = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;

export const HiddenRadioInput = styled.input.attrs({ type: "radio" })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`;

export const CustomRadio = styled.span`
  width: 20px;
  height: 20px;
  border: 2px solid ${({ theme }) => theme.colors.black};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  transition: all 0.2s ease-in-out;
  flex-shrink: 0;

  ${HiddenRadioInput}:checked + & {
    background-color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.black};
  }

  ${HiddenRadioInput}:focus-visible + & {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

export const RadioLabelText = styled.p`
  font-family: ${({ theme }) => theme.font.base};
  font-size: 18px;
  font-weight: ${({ theme }) => theme.font.weights.regular};
  color: ${({ theme }) => theme.colors.black};
  cursor: default;
`;
