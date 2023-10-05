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
        const formData = new FormData(e.currentTarget);
        for (let [key, value] of formData.entries()) {
          console.log(key, value);
        }
        e.preventDefault();
      }
      }>
        <Input id="mail" name="mail" label={'Mail'} type={'text'} required />
        <RadioGroup id="shapes" name="shapes" values={shapes} required />
        <CountrySelect id="country" name="country" required />
        <Button variant="primary">
          Confirm
        </Button>
      </form>
    </>
  );
}

export default App;
