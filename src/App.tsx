import './App.css';
import Button from './components/Button/Button';
import CountrySelect from './components/CountrySelect';
import RadioGroup from './components/RadioGroup';
import TwoFactor from './components/TwoFactors';

function App() {
  const shapes = [{ value: "circles", label: "circles" }, { value: "poli", label: "poli" }];


  return (
    <>
      <form>
        <RadioGroup name="shapes" values={shapes} required />
        <Button variant="primary">
          Confirm
        </Button>
      </form>
    </>
  );
}

export default App;
