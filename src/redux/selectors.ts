import { Filter } from '../types/phonebook';

interface SelState {
  filter: Filter;
}

const getSelFilter = (state: SelState) => state.filter.filter;

export { getSelFilter };
