import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Body from './Components/Body';
import ErrorBoundary from './Components/ErrorBoundary';


function App() {
  
  return (
    <Provider store={appStore}>
      <ErrorBoundary>
        <Body/>
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
