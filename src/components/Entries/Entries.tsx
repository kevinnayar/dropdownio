import './entries.scss';

type StorageData = {
  utcTimestamp: number;
  score: number;
};

type EntriesProps = {
  entries: null | StorageData[];
};

const Entries = ({ entries }: EntriesProps) => {
  return (
    <div className="entries">
      {entries && entries.length ? (
        <div className="entries__list">
          {entries.map((entry) => {
            const time = new Date(entry.utcTimestamp);
            return (
              <div key={entry.utcTimestamp} className="entry">
                <h2>Sleep score: {entry.score.toFixed(2)}%</h2>
                <p>Recorded at {time.toString()}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="entries__list">
          <h2>No entries recorded yet</h2>
        </div>
      )}
    </div>
  );
};

export default Entries;
