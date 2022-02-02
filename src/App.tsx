import { useState } from 'react';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Dropdown from './components/Dropdown/Dropdown';
import Button from './components/Button/Button';
import Entries from './components/Entries/Entries';

import { getDurations, sleep } from './utils/baseUtils';
import { useStorage } from './hooks/useStorage';

type StorageData = {
  utcTimestamp: number,
  score: number,
};

const App = () => {
  const storageOpts = {
    storage: window.localStorage,
    storageKey: '__DROPDOWNIO_STORAGE_KEY__',
  };
  const storage = useStorage<StorageData[]>(storageOpts);
  const [entries, setEntries] = useState<null | StorageData[]>(storage.get());

  const durationsInBedOpts = getDurations();
  const [durationInBed, setDurationInBed] = useState<null|number>(null);

  const [durationsAsleepOpts, setDurationsAsleepOpts] = useState(getDurations());
  const [durationAsleep, setDurationAsleep] = useState<null | number>(null);

  const [isLoading, setIsLoading] = useState(false);

  const durationsSet = typeof durationInBed === 'number' && typeof durationAsleep === 'number';

  const calculate = async () => {
    if (durationsSet) {
      setIsLoading(true);

      // to simulate a fake delay
      await sleep(1000);

      // calculate
      const entry: StorageData = {
        utcTimestamp: Date.now(),
        score: (100 * durationAsleep) / durationInBed,
      };
      const newEntries = entries ? [entry, ...entries] : [entry];
      setEntries(newEntries);
      storage.set(newEntries);      

      // reset
      setDurationInBed(null);
      setDurationAsleep(null);

      setIsLoading(false);
    }
  }

  const handleDurationInBed = (value: null | number) => {
    setDurationInBed(value);

    // since you cannot sleep for longer than you are in bed :)
    if (typeof value === 'number') {
      const index = durationsInBedOpts.findIndex(d => d.value === value.toString());
      if (index > -1) {
        const newDurationsAsleepOpts = [...getDurations().slice(0, index + 1)];
        setDurationsAsleepOpts(newDurationsAsleepOpts);
      }
    }
  }

  return (
    <div className="app">
      <Header title="Dropdownio" />
      <Main>
        <Dropdown label="Duration in bed" opts={durationsInBedOpts} onChange={handleDurationInBed} />
        <Dropdown label="Duration asleep" opts={durationsAsleepOpts} onChange={setDurationAsleep} />
        <Button disabled={!durationsSet} loading={isLoading} onClick={calculate}>
          Calculate
        </Button>
        <Entries entries={entries} />
      </Main>
    </div>
  );
}

export default App;
