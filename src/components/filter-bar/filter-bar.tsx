import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { Brand } from '../../types/brand';
import './filter-bar.css';
import { filterByBrand, resetFilter } from '../../store/actions';

function FilterBar(): JSX.Element {

  const brands = useAppSelector(state => state.brands)
  const dispatch = useAppDispatch();

  const [filterBrands, setFilterBrands] = useState<number[]>([]);
  const [openedFilter, setOpenedFilter] = useState(false);

  const inputFilterHandler = (brand: Brand) => {
    if (filterBrands.findIndex((filterBrand) => filterBrand === brand.id) >= 0) {
      setFilterBrands(filterBrands.filter((filterBrand) => filterBrand !== brand.id));
    } else {
      setFilterBrands([...filterBrands, brand.id]);
    }
  }

  const submitFilterHandler = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (filterBrands.length > 0) {
      dispatch(filterByBrand(filterBrands));
    } else {
      dispatch(resetFilter());
    }
  }

  const resetFilterHandler = (evt: React.FormEvent<HTMLFormElement>) => {
      evt.preventDefault();
      dispatch(resetFilter());
      setFilterBrands([]);
  }

  return (
    <form className="filter" onSubmit={submitFilterHandler} onReset={resetFilterHandler}>
      <div className="filter__head-wrapper">
        <h2 className="filter__title">Бренды</h2>
        <button className={`filter__open-filter-button ${openedFilter ? 'filter-open-filter-button--opened' : ''}`} onClick={() => setOpenedFilter(!openedFilter)}>
          <span className="visually-hidden">Открыть меню</span>
        </button>
      </div>
      <div className={`filter__wrapper ${openedFilter ? 'filter__wrapper--opened' : ''}`}>
        <fieldset className="filter__group">
          {
            brands.map((brand) => (
              <label className="filter__label" key={brand.id}>
                <input className="filter__input" type="checkbox" checked={filterBrands.includes(brand.id)} onChange={() => inputFilterHandler(brand)}/>
                {brand.title}
              </label>
            ))
          }
        </fieldset>
        <button className="filter__submit-button" type="submit">Применить</button>
        <button className="filter__reset-button" type="reset">Сбросить</button>
      </div>
    </form>
  )
}

export default FilterBar;