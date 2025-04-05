//Also need to review the whole legal ease stuff BEFORE GOING LIVE
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/stores/Page_Store.jsx";
import "../src/components/components_styles.css";
import "./Index.css";
import "./App.css";
import App from "./App.jsx";

import { BrowserRouter as Router} from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <StrictMode>
        <Router>
          <App />
        </Router>
      </StrictMode>
    </Provider>
  </>
);
