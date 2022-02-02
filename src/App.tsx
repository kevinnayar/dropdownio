import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Dropdown from './components/Dropdown/Dropdown';

const App = () => {
  return (
    <div className="app">
      <Header title="Dropdownio" />
      <Main>
        <Dropdown
          label="test"
          opts={[
            { value: '1', label: 'One' },
            { value: '2', label: 'Two' },
          ]}
          onChange={(v) => console.log(v)}
        />
      </Main>
    </div>
  );
}

export default App;
