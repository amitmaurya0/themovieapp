
import React from 'react';
import MainRoute from './src/routes'
import ConfigProvider from './src/ConfigProvider'

const App = () => <ConfigProvider><MainRoute /></ConfigProvider>

export default App;
