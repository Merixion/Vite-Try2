import styles from "./welcome.module.css";

function Welcome(){
  return(
    <div className={styles.box}>
      <h1>Добро пожаловать</h1>
      <p>Реакт не такой страшный...</p>
    </div>
  );
}

export default Welcome;