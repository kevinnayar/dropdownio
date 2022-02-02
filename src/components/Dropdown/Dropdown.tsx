import { useState } from 'react';
import './dropdown.scss';

type DropdownOpts = {
  value: string;
  label: string;
};

type Props = {
  label: string;
  opts: DropdownOpts[];
  onChange: (opt: DropdownOpts) => void;
};

const Dropdown = ({ label, opts, onChange }: Props) => {
  const id = label.toLowerCase().replace(' ', '-');

  const [value, setValue] = useState(opts[0].value);

  const handleOnChange = (e: any) => {
    const value = e.target.value;
    const opt = opts.find((o) => o.value === value);
    if (opt) onChange(opt);
    setValue(value);
  };

  return (
    <div className="dropdown">
      <label className="dropdown__label" htmlFor={id}>
        {label}
      </label>

      <select className="dropdown__select" name={id} id={id} value={value} onChange={handleOnChange}>
        {opts.map(({ value, label }) => (
          <option className="dropdown__option" key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
