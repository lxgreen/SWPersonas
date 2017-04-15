import React from 'react';
import '../../css/components/Toolbar.css';
import ToggleButton from './ToggleButton';

class Toolbar extends React.Component {

    render() {
        return (
          <ul className="toolbar">
            <li><ToggleButton text="Search"/></li>
          </ul>
        );
    }

}

export default Toolbar;