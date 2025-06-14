import React from "react";
import {
  RadioButtonContainer,
  HiddenRadioInput,
  CustomRadio,
  RadioLabelText,
} from "./styles";

interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  value: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function RadioButton({
  label,
  name,
  value,
  checked,
  onChange,
  id,
  ...rest
}: RadioButtonProps) {
  const uniqueId = id || `radio-${name}-${value.replace(/\s+/g, "-")}`;

  return (
    <RadioButtonContainer htmlFor={uniqueId}>
      <HiddenRadioInput
        id={uniqueId}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        {...rest}
      />
      <CustomRadio />
      <RadioLabelText>{label}</RadioLabelText>
    </RadioButtonContainer>
  );
}
