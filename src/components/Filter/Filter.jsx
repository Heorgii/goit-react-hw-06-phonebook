import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/filterSlice';


const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state);//.filter.value

    const filterChange = e => {
        dispatch(filterContact(e.currentTarget.value));
    }

    return (
        <div className={css.filter_box}>
            <label>
                <span className={css.filter_tittle}>Find contacts by name</span>
                <input type="name"  onChange={filterChange} //value={filter}
                    className={css.filter_input}
                />
            </label>
        </div>
    );
};

export default Filter;