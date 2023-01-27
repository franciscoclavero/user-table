import { setFilterText, setSort } from './reducer/filterReducer';
import { setLoading } from './reducer/loaderReduce';
import { setDisplay, setUserData, setUserList } from './reducer/userReducer';



describe('Teste de Ações ', () => {
  const data = { id: 1, name: 'Test' };
  it("- SetFilterText", () =>{
    const filterText = setFilterText(data);
    expect(filterText).toEqual({
      type: 'filter/setFilterText',
      payload: data,
    });
  });
  it("- setSort", () =>{
    const sortText = setSort(data);
    
    expect(sortText).toEqual({
      type: 'filter/setSort',
      payload: data,
    });
  });
  it("- setLoading", () =>{
    const loading = setLoading(data);
    
    expect(loading).toEqual({
      type: 'loader/setLoading',
      payload: data,
    });
  });
  it("- setDisplay", () =>{
    const display = setDisplay(data);
    
    expect(display).toEqual({
      type: 'users/setDisplay',
      payload: data,
    });
  });
  it("- setUserData", () =>{
    const userData = setUserData(data);
    
    expect(userData).toEqual({
      type: 'users/setUserData',
      payload: data,
    });
  });
  it("- setUserList", () =>{
    const userList = setUserList(data);
    
    expect(userList).toEqual({
      type: 'users/setUserList',
      payload: data,
    });
  });
});