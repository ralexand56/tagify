import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { TextFieldProps } from "@material-ui/core/TextField";

export function CustomInput(props: TextFieldProps) {
  return <Container {...props} />;
}

const Container = styled(TextField)``;
