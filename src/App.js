import React from 'react';
import Sidebar from './components/sidebar';
import Video from './components/video';

// Permite o acesso às informações contidas no store.
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Video />
        <Sidebar />
      </Provider>
    </div>
  );
}

export default App;
