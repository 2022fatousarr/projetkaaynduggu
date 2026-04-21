import { Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import HomePage from "./pages/home";
import ShopPage from "./pages/shop";
import ContactPage from "./pages/contact";
import BlogPage from "./pages/blog";
import AboutPage from "./pages/about";
import Se_ConnecterPage from "./pages/se_connecter";
import Pagedashboard from "./pages/dashboard/dashboard";
import LegumesPage from "./pages/legumes";
import CondimentsPage from "./pages/condiments";
import ProductDetail from "./components/data/productdetail";
import SidebarShop from "./pages/dashboard/sidebarcart";
import CommandePage from "./pages/dashboard/commande";
import DashboardHome from "./pages/dashboard/dashboardhome";
import ProfilePage from "./pages/dashboard/profilepage";
  
   function MainApp() {
   return (
    <div>
    <div className="flex">
        <SidebarShop />
    </div>
      <Routes>

        <Route path="/dashboard" element={<Pagedashboard />} >
          <Route index element={<DashboardHome />} />
          <Route path="commande" element={<CommandePage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>

        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="shop/fruits" element={<ShopPage />} />
          <Route path="legumes" element={<LegumesPage />} />
          <Route path="condiments" element={<CondimentsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="produit/:id" element={<ProductDetail />} /> {/* Route pour les détails du produit */}
          </Route>

        <Route path="/se_connecter" element={<Se_ConnecterPage />} />
        
      </Routes>
    </div>
  )
}

export default MainApp
