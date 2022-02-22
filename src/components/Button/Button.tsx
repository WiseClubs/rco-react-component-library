import React, { ReactElement } from 'react';

export interface ButtonProps {
  label: string
}

function Button(props: ButtonProps): ReactElement {
  const { label } = props;
  return <button type="button">{label}</button>;
}

export default Button;
