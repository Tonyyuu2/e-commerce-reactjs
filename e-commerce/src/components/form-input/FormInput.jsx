import React from "react";

import { Group, Input, FormInputLabel } from "./formInput.styles.jsx";

function FormInput({ label, inputOptions }) {
  return (
    <Group>
      <Input {...inputOptions} />
      {label && (
        <FormInputLabel shrink={inputOptions.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
}

export default FormInput;
