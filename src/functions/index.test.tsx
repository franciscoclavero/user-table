import getSortAsc from "./sortAsc";
import getSortDesc from "./sortDesc";

test("Esse object [{id: 1},{id: 2}] retorna [{id: 2},{id: 1}]", () => {
  const sequence = [{id: 1},{id: 2}];

  expect(getSortAsc(sequence, 'id')).toEqual([{id: 2},{id: 1}]);
});

test("Esse object [{id: 2},{id: 1}] retorna [{id: 1},{id: 2}]", () => {
  const sequence = [{id: 2},{id: 1}];

  expect(getSortDesc(sequence, 'id')).toEqual([{id: 1},{id: 2}]);
});