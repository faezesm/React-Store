import { RotatingLines } from "react-loader-spinner"

import styles from './Loader.module.css'

const Loader = () => {
  return (
    <div className={styles.loader}>
      <RotatingLines width="100px" height="100px" strokeWidth="3" strokeColor="#1A237E" />
    </div>
  );
}

export default Loader