import Navbar from "../../components/navbar/navbar";
import './page-layout.css';

type PageProps = {
  children: React.ReactNode;
}

function PageLayout({children}: PageProps): JSX.Element {
  return (
    <div className="shop">
      <Navbar />
      {children}
    </div>
  )
}

export default PageLayout;