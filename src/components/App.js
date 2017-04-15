import React from 'react';
import '../../css/components/App.css';

import Title from './Title';
import Toolbar from './Toolbar';
import DataGrid from './DataGrid';

class App extends React.Component {

    render() {
        return (
          <div className='App'>
            <Title text="Star Wars Personas"/>
            <Toolbar/>
            <DataGrid initSrc="http://swapi.co/api/people/?format=json"/>
          </div>
        );
    }

}

export default App;