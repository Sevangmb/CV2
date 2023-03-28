import { CssVarsProvider } from "@mui/joy/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import customTheme from "./customTheme";
import BasicTabs from "./components/BasicTabs";
import About from "./routes/about";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";

export default function App() {
  const tabsDefinition = [
    {
      title: "ABOUT",
      url: "/about",
      content: <About />,
    },
    {
      title: "API",
      url: "/expenses",
      content: <Expenses />,
    },
    {
      title: "CV",
      url: "/invoices",
      content: <Invoices />,
    },
  ];

  return (
    <CssVarsProvider theme={customTheme}>
      <Router>
        <BasicTabs tabs={tabsDefinition} />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/invoices" element={<Invoices />} />
        </Routes>
      </Router>
    </CssVarsProvider>
  );
}
