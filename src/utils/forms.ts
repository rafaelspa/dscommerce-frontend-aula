export function update(inputs: any, name: string, newValue: any) {
  return { ...inputs, [name]: { ...inputs[name], value: newValue } };
}

export function updateAll(inputs: any, newValues: any) {
  const newInputs: any = {};
  for (var name in newValues) {
    newInputs[name] = { ...inputs[name], value: newValues[name] };
  }
  return newInputs;
}

export function toValue(inputs: any) {
  const data: any = {};
  for (var name in inputs) {
    data[name] = inputs[name].value;
  }
  return data;
}
