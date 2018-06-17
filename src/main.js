// Import Vue
import Vue from 'vue';

// Import F7


// Import F7 Styles

// Import Icons and App Custom Styles
import IconsStyles from './css/icons.css';
import AppStyles from './css/app.css';

// Import Routes
import Routes from './routes.js'

// Import App Component
import App from './app';

// Init F7 Vue Plugin

// Init App
new Vue({
  el: '#app',
  template: '<app/>',
  // Init Framework7 by passing parameters here
  framework7: {
    id: 'io.framework7.testapp', // App bundle ID
    name: 'Framework7', // App name
    theme: 'auto', // Automatic theme detection
    // App routes
    routes: Routes,
  },
  // Register App Component
  components: {
    app: App
  }
});
