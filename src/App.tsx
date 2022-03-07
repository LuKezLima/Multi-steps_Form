import {Router} from './router'
import {BrowserRouter as Routes} from 'react-router-dom'
import {FormProvider} from './contexts/FormContext'


const App = () => {
  return (
    <FormProvider>
       <Routes>
          <Router/>
       </Routes>
      </FormProvider>

  );
}

export default App;
