import React from 'react';
import ReactDOM from 'react-dom';
import Details from './index';

const App = () => (
    <Details
        summaryContent={<span>React Details</span>}
        onToggle={console.log}
        open
    >
        <p>
            This is a HTML details wrapper. For more information please visit{' '}
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details">
                MDN: details
            </a>
            .
        </p>
    </Details>
);

ReactDOM.render(<App />, document.getElementById('demo'));
