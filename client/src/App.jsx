import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';  
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Opportunities from './pages/Opportunities';
import Support from './pages/Support';
import React from 'react';


// Research
import Biodiversity from './pages/Research/Biodiversity';
import Coexistence from './pages/Research/Coexistence';
import Communities from './pages/Research/Communities';
import Ecology from './pages/Research/Ecology';
import Ecosystem from './pages/Research/Ecosystem';
import HumanWildlife from './pages/Research/HumanWildlife';

// Outreach
import Publications from './pages/Outreach/Publications';
import ScienceArticles from './pages/Outreach/ScienceArticles';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="team" element={<Team />} />
          <Route path="opportunities" element={<Opportunities />} />
          <Route path="support" element={<Support />} />

          {/* Research Subpages */}
          <Route path="research/biodiversity" element={<Biodiversity />} />
          <Route path="research/coexistence" element={<Coexistence />} />
          <Route path="research/communities" element={<Communities />} />
          <Route path="research/ecology" element={<Ecology />} />
          <Route path="research/ecosystem" element={<Ecosystem />} />
          <Route path="research/human-wildlife" element={<HumanWildlife />} />

          {/* Outreach Subpages */}
          <Route path="outreach/publications" element={<Publications />} />
          <Route path="outreach/science-articles" element={<ScienceArticles />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
