import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home.jsx';
import Services from '../pages/Services/Services';
import Testimonials from "../pages/Testimonials/Testimonials";
import Orders from "../pages/Orders/Orders";
import { ROUTES } from './RouterConfig';
const Router = () => {

    const RouteWithRole = ({ Element }) => {
        return (
          <>
            <Element/>
          </>
        );
      }

  return (
    <div>
        <Routes>
            <Route exact path={ROUTES.Home} element={<RouteWithRole Element={Home} />}></Route>
            <Route exact path={ROUTES.Services} element={<RouteWithRole Element={Services} />}></Route>
            <Route exact path={ROUTES.Testimonials} element={<RouteWithRole Element={Testimonials} />}></Route>
            <Route exact path={ROUTES.Orders} element={<RouteWithRole Element={Orders} />}></Route>
        </Routes>
    </div>
  )
}

export default Router