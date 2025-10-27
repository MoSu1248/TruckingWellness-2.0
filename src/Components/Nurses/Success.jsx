import React, { useEffect } from "react";
import Banner from "../Banner/Banner";
import { Route, Routes, useNavigate } from "react-router-dom";
import Nurses from "./Nurses";

export default function Success() {
  const navigate = useNavigate();
  function RedirectReactRouterExample() {
    return (
      <Routes>
        <Route path="Nurses" element={<Nurses />} />
      </Routes>
    );
  }
  useEffect(() => {
    setTimeout(() => {
      // 👇 Redirects to about page, note the `replace: true`
      navigate('/Nurses', { replace: true });
    }, 3000);
  }, []);
  return (
    <>
      <div className="wrapper">
        <div>
          <Banner title="Nurses" />

          <h1>New Nurse Added, One moment please</h1>
        </div>
      </div>
    </>
  );
}
