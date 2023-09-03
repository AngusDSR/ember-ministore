import { helper } from '@ember/component/helper';

export default helper(function currency(params, hash) {
  const [number] = params;
  const { sign = '£' } = hash;
  const pounds = Math.floor(number);
  let pence = Math.floor(number * 100) % 100;

  if (pence.toString().length === 1) {
    pence = `0${pence}`;
  }

  return `${sign}${pounds}.${pence}`;
});
