import './App.css';
import Button from './components/Button/Button';
import CountrySelect from './components/CountrySelect';
import Input from './components/Input/Input';
import RadioGroup from './components/RadioGroup';
import TwoFactor from './components/TwoFactors';


function App() {
  const shapes = [{ value: "circles", label: "circles" }, { value: "poli", label: "poli" }];


  return (
    <>
      <form onSubmit={(e) => {
        console.log(e.target);
        e.preventDefault();
      }
      }>
        <Input label={'Mail'} type={'text'} required />
        <RadioGroup name="shapes" values={shapes} required />
        <Button variant="primary">
          Confirm
        </Button>
      </form>
    </>
  );
}

export default App;
