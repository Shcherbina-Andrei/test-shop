import FilterBar from '../../components/filter-bar/filter-bar';
import ProductsList from '../../components/products-list/products-list';
import './main-page.css';

function MainPage(): JSX.Element {
  return (
    <main className="shop__main-page">
      <FilterBar />
      <ProductsList />
    </main>
  );
}

export default MainPage;