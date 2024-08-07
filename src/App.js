import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";
import OurStory from "./Components/OurStory";
import Catering from "./Components/Catering";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Cart from "./Components/Cart";
import TopButton from "./Utils/TopButton";
import Order from "./Components/Order";
import Profile from "./Components/Profile";
import UserProfile from "./Utils/UserProfile";
import ManageUserAddress from "./Utils/ManageUserAddress";
import WishList from "./Utils/WishList";
import ProfileNotifications from "./Utils/ProfileNotifications";
import CustomerSupport from "./Utils/CustomerSupport";
import FAQs from "./Utils/FAQs";
import ItemDetails from "./Components/ItemDetails";
import ErrorPage from "./Utils/ErrorPage";
import SignUp from "./Components/Signup";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/catering" element={<Catering />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/menu/:id" element={<ItemDetails />} />
        <Route path="/profile" element={<Profile />}>
          <Route index element={<UserProfile />} />
          <Route path="manage-address" element={<ManageUserAddress />} />
          <Route path="wishlist" element={<WishList />} />
          <Route path="notifications" element={<ProfileNotifications />} />
          <Route path="customer-support" element={<CustomerSupport />} />
          <Route path="frequently-asked-questions" element={<FAQs />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <TopButton />
      <Footer />
    </>
  );
}

export default App;
