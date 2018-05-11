import React from 'react';
import { render} from 'react-dom';
import checkForDirectorySupport from '../../src/';

const App = () => (
    <div>
    	Can I upload directories? {checkForDirectorySupport() ? 'Yes :)' : 'No :('}
    </div>
);

render(<App />, document.getElementById("root"));