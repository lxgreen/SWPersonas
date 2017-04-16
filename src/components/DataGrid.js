import React from 'react';
import '../../css/components/DataGrid.css';

class DataGrid extends React.Component {

    constructor(){
        super();
        this.state = {
            items: [] 
        };
        this.defaultProps = {
            initSrc: 'http://swapi.co/api/people/?format=json'
        };
    }    

    componentWillMount() {
        fetch(this.props.initSrc)
            .then(response => response.json())
            .then( data => this.setState({items : data.results})
        );
    }

    render() {
        let items = this.state.items;
        return (
          <div className='DataGrid'>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Birth Year</th>
                        <th>Homeworld</th>
                        <th>Films</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, idx) => 
                        <tr key={idx}>
                            <td>{item.name}</td>
                            <td>{item.birth_year}</td>                            
                            <td><a href={item.homeworld}>{item.homeworld}</a></td>
                            <td>{ item.films.map((film, index) => 
                                <span><a key={index} href={film}>{film}</a> </span>)}</td>
                    </tr>)}
                </tbody>
                
            </table>
          </div>
        );
    }

}

export default DataGrid;