import { filterContact } from 'redux/contacts/filterSlice';
import { useSelector } from 'react-redux';
import { selectFilter } from '../../redux/contacts/selectors';

import { useDispatch } from 'react-redux';

import { FilterInput } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);

  const changeFilter = e => {
    const filter = e.currentTarget.value;
    dispatch(filterContact(filter));
  };

  return (
    <div>
      <FilterInput
        type="text"
        name="filter"
        placeholder="Find contacts by name"
        value={value}
        onChange={changeFilter}
      />
    </div>
  );
};
