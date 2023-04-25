import css from './Extension.css';

export const Extension = () => {
  return (
    <div className={css.container}>
      <h1 className={css.header}>Stop Ads</h1>
      <p className={css.text}>Привіт. Я - маленьке розширення до браузера, призване виконувати наступне:</p>
      <ul className={css.list}>
        <li>Невпинно, нещадно і безжалісно <b>блокувати рекламу</b> в кожній вкладці твого браузера</li>
        <li><b>Збільшити швидкість</b> загрузки сторінки</li>
        <li><b>Економити Мегабайти</b> твого інтернету, котрі ти раніше витрачав на загрузку рекламних банерів</li>
      </ul>
    </div>
  );
};
