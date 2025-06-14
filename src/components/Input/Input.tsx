import React from "react";

import { StyledInput, StyledTextArea, Label, Container } from "./styles";

interface InputBaseProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

interface InputTextProps extends InputBaseProps {
  asTextArea?: false;
}

interface InputTextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  asTextArea: true;
  label?: string;
}

type InputProps = InputTextProps | InputTextAreaProps;

export default function Input(props: InputProps) {
  const { label, asTextArea, ...rest } = props;

  return (
    <Container>
      {label && <Label>{label}</Label>}
      {asTextArea ? (
        <StyledTextArea
          {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <StyledInput
          {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
    </Container>
  );
}
