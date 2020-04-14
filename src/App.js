import React from 'react';
import Heading from './components/Heading';
import PieCharts from './components/PieCharts';
import ColumnGraphs from './components/ColumnGraphs';
import FilteredGraphs from './components/FilteredGraphs';
import './App.css';
import { Tab, Container } from 'semantic-ui-react';
import SignOffDetailsGraph from './components/SignOffDetailsGraph';
import FundPerformanceGraph from './components/FundPerformanceGraph';
import Sample from './Sample';

const Tabs = [
  { 
    menuItem: 'Fund Statistics',
     render: () => <Tab.Pane>
                      <PieCharts />
                      <ColumnGraphs />
                    </Tab.Pane> 
  },
  { 
    menuItem: 'Performance Statistics',
     render: () => <Tab.Pane>
                      <SignOffDetailsGraph/>
                      <FundPerformanceGraph/>
                    </Tab.Pane> 
  }
  
];

function App() {
  return (
    <>
      <Container fluid>
          <Heading />
          <FilteredGraphs />
          <Tab
          menu={{ color: 'blue', attached: false, tabular: false }}
          panes={Tabs}
        />
         
      </Container>  
    </>
  );
}

export default App;
