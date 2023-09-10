import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { filtered } from '../../redux/phonebookSlice';
import { getSelFilter } from '../../redux/selectors';
import s from './filter.module.css';

const Filter: React.FC = (): JSX.Element => {
  const filter = useAppSelector(getSelFilter);
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filtered(event.target.value));
  };

  return (
    <>
      <label className={s.filter}>
        Search:
        <input
          className={s.input}
          type='text'
          name='filter'
          value={filter}
          onChange={handleChange}
        />
      </label>
    </>
  );
};

export default Filter;
