import { IsEven } from '@my-org/is-even';
import styles from './is-odd.module.css';

/* eslint-disable-next-line */
export interface IsOddProps {}

export function IsOdd(props: IsOddProps) {
  return (
    <div className={styles['container']}>
      <IsEven />
      <h1>Welcome to IsOdd!</h1>
    </div>
  );
}

export default IsOdd;
