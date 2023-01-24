const getSortAsc = (array: any[], property: string = 'name') => {
  console.log(array);
  if (property === 'id')
  return array.sort((a, b) => compareNumbers(a.id, b.id));
  
  return array.sort((a, b) => (a[property] < b[property] ? -1 : 1) );
};

const compareNumbers = (a: number, b: number) => {
  return b - a;
};

export default getSortAsc;