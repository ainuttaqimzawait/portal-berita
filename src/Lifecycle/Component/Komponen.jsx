import React from 'react';
import NavigationBar from './Komponen/Navbar';
import Body from './Komponen/body';

class Komponen extends React.Component {
    render() {
        return (
            <div>
                <NavigationBar />
                <Body />
            </div>
        );
    }
}

export default Komponen;