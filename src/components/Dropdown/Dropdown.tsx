import { useState } from 'react';

type DropdownOpts = {
  value: string;
  label: string;
};

type Props = { label: string; opts: DropdownOpts[] };

const Dropdown = ({ label, opts }: Props) => {
  const id = label.toLowerCase().replace(' ', '-');

  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!expanded);

  const onChange = (e: any) => {
    console.log(e.target.value);
  };

  return (
    <div className={`dropdown ${expanded ? 'expanded' : 'collapsed'}`}>
      <label className="dropdown__label" htmlFor={id}>
        <i onClick={toggleExpanded} className="material-icons">
          {expanded ? 'expand_less' : 'expand_more'}
        </i>
        <span>{label}</span>
      </label>

      <select name={id} id={id} onChange={onChange}>
        {opts.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
