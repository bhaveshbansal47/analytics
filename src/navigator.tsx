import { Route, Routes as RouteSwitch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./routes/home";

export function Navigator() {
  return (
    <BrowserRouter>
      <RouteSwitch>
        <Route path="/" element={<Home />} />
      </RouteSwitch>
    </BrowserRouter>
  );
}
