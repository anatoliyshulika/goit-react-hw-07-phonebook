import { getFilter } from 'app/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from './filterSlice';
import { Label, Input } from './Filter.styled';

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  function changeFilter(evt) {
    dispatch(setFilter(evt.currentTarget.value));
  }

  return (
    <>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input
        id="filter"
        type="text"
        name="filter"
        value={filter}
        onChange={changeFilter}
        autoComplete="off"
      ></Input>
    </>
  );
}
