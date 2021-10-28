import React from 'react';
import InputComponent from '../components/InputComponent';
import PhantomConnection from '../components/PhantomConnection';

const Home = () => {
    return (<>
        <div className="App">
            <div className="App-header">
                <InputComponent />
                <PhantomConnection />
            </div>
        </div>
    </>)
}

export default Home