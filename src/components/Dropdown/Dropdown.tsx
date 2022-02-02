import { useState } from 'react';
import { DropdownOpts } from '../../utils/baseUtils';
import './dropdown.scss';

type Props = {
  label: string;
  opts: DropdownOpts[];
  onChange: (value: null | number) => void;
};

const Dropdown = ({ label, opts, onChange }: Props) => {
  const id = label.toLowerCase().replace(' ', '-');

  const [value, setValue] = useState('');

  const handleOnChange = (e: any) => {
    const value = e.target.value;
    setValue(value);

    const valueToSet = value ? parseFloat(value) : null;
    onChange(valueToSet);
  };

  return (
    <div className="dropdown">
      <label className="dropdown__label" htmlFor={id}>
        {label}
      </label>

      <select className="dropdown__select" name={id} id={id} value={value} onChange={handleOnChange}>
        <option className="dropdown__option" value=""></option>
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
