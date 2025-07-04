import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Spinner from "./Components/Common/spinner/Spinner";
import ScrollTop from "./Components/Common/ScrollTop/ScrollTop";
import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import "./App.css";
import Service from "./Components/Pages/Service/Service";
import Business from "./Components/Pages/Business/Business";
import Contact from "./Components/Pages/Contact/Contact";
import Privacy from "./Components/Pages/Privacy/Privacy";
import NotFound from "./Components/Common/NotFound/NotFound";
import ScrollBar from "./Components/Common/ScrollBar/ScrollBar";
import { AppProvider } from "./Components/Pages/Context/AppContext";
import Term from './Components/Pages/Term/Term';

function App() {
  return (
    <div>
      <AppProvider>
      <Toaster
        toastOptions={{
          success: {
            style: {
              duration: 3000,
              background: "green",
              color: "white",
            },
          },
          error: {
            style: {
              duration: 3000,
              background: "red",
              color: "white",
            },
          },
        }}
      />
      <ScrollTop />
      <ScrollBar/>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/business" element={<Business />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={< Term/>} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      </AppProvider>
    </div>
  );
}

export default App;
