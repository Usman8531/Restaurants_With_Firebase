import "./App.scss";
import AuthContextProvider from "./context/AuthContext";

import Routes from "./pages/Routes";
// animation
import { AnimatePresence } from "framer-motion";

// importing bootstrap js
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

// toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <AuthContextProvider>
        <AnimatePresence>
          <Routes />
        </AnimatePresence>
      </AuthContextProvider>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        // pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
