import { Outlet } from 'react-router-dom';
import Header from '../components/view/header';
import Footer from '../components/view/footer';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;