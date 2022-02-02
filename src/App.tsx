import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Dropdown from './components/Dropdown/Dropdown';
import Button from './components/Button/Button';

const App = () => {
  return (
    <div className="app">
      <Header title="Dropdownio" />
      <Main>
        <Dropdown
          label="Duration in bed"
          opts={[
            { value: '1', label: 'One' },
            { value: '2', label: 'Two' },
          ]}
          onChange={(v) => console.log(v)}
        />
        <Dropdown
          label="Duration asleep"
          opts={[
            { value: '3', label: 'Three' },
            { value: '4', label: 'Four' },
          ]}
          onChange={(v) => console.log(v)}
        />
        <Button disabled>Calculate</Button>
      </Main>
    </div>
  );
}

export default App;
