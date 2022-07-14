import { CssVarsProvider } from '@mui/joy/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { customTheme } from './customTheme';
import BasicTabs from './BasicTabs';
import About from './routes/about';
import Expenses from './routes/expenses';
import Invoices from './routes/invoices';

export default function App() {
  const tabsDefinition = [
    {
      title: 'item 1',
      url: '/about',
      content: <About />,
    }, 
    {
      title: 'item 2',
      url: '/expenses',
      content: <Expenses />,
    }, 
    {
      title: 'item 3',
      url: '/invoices',
      content: <Invoices />,
    }, 
  ];

  return (
    <CssVarsProvider theme={customTheme}>
      <Router>
        <BasicTabs tabs={tabsDefinition} />
        <Routes>
          <Route path="/about" element={<About />}/>
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/invoices" element={<Invoices />} />
        </Routes>
      </Router>     
    </CssVarsProvider>   
  );
}
