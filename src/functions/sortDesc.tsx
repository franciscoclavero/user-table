const getSortDesc = (array: any[], property: string) => {
  if (property === 'id')
    return array.sort((a, b) => compareNumbers(a.id, b.id));
  
  return array.sort((a, b) => (a[property] > b[property] ? -1 : 1) );
};

const compareNumbers = (a: number, b: number) => {
  return a - b;
};

export default getSortDesc;