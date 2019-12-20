interface IData {
  [key: string]: string;
}
export function createActionType(types) {
  const data: IData = {};
  types.map(type => {
    data[type] = type;
  });
  return data;
}
