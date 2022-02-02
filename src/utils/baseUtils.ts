export type DropdownOpts = {
  value: string;
  label: string;
};

export function getDurations(): DropdownOpts[] {
  const opts: DropdownOpts[] = [];
  const hours = 24;

  for (let i = 0; i <= hours; i += 1) {
    const valueOne = i;
    opts.push({
      value: `${valueOne}`,
      label: `${valueOne} ${valueOne === 1 ? 'hour' : 'hours'}`,
    });

    if (i !== hours) {
      const valueTwo = i + 0.5;
      opts.push({
        value: `${valueTwo}`,
        label: `${valueTwo} hours`,
      });
    }
  }

  return opts;
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}




