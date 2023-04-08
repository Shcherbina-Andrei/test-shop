import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import OrderPage from '../../pages/order-page/order-page';
import PageLayout from '../../pages/page-layout/page-layout';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/order" element={<OrderPage />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
}

export default App;
