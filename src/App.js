import React, { lazy, Suspense } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

// component
// import Navbar from 'components/Navbar';
// import Footer from 'components/Footer';

import 'assets/styles/font.scss';
import 'assets/styles/button.scss';
import 'assets/styles/form.scss';
import 'assets/styles/card.scss';

import 'assets/styles/navbar.scss';

import 'assets/styles/home.scss';
import 'assets/styles/searchpage.scss';
import 'assets/styles/productpage.scss';

import 'assets/styles/footer.scss';

import moment from 'moment-timezone';

moment.tz.setDefault('Asia/Jakarta');

const Navbar = lazy(() => import('components/Navbar'));

const HomePage = lazy(() => import('pages/Home'));
const SearchPage = lazy(() => import('pages/Search'));
const ProductPage = lazy(() => import('pages/Product'));

const Footer = lazy(() => import('components/Footer'));

const App = () => {
  const RenderRoutes = () => {
    return (
      <Suspense fallback={<></>}>
        <Navbar />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/search" component={SearchPage} />
          <Route path="/product/:slug" component={ProductPage} />
        </Switch>
        <Footer />
      </Suspense>
    );
  };
  return (
    <>
      <div className="row mx-0">
        <div className="col-12 p-0" style={{ minHeight: '80vh' }}>
          <RenderRoutes />
        </div>
      </div>
    </>
  );
};

export default withRouter(App);
