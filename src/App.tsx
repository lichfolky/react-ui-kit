import './App.css';
import CountrySelect from './components/CountrySelect';
import RadioGroup from './components/RadioGroup';
import TwoFactor from './components/TwoFactors';

function App() {
  const shapes = [{ value: "circles", label: "circles" }, { value: "poli", label: "poli" }];


  return (
    <>
      <RadioGroup name="shapes" values={shapes} required />
    </>
  );
}

export default App;
