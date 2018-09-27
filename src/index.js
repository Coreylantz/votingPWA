import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

ReactDOM.render(<App />, document.getElementById('root'))

// navigator === browser
// Service worker will not show up on navigator if not HTTPS or local server
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker
            .register('/r2d2-sw.js')
            .then(function() {
                console.log('Service worker registered?');
            })
            .catch(function(err){
                console.log(err, 'Nothing');
            });
    });
}
