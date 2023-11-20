// import Image from "next/image";

import styles from "./ServicesHero.module.css";

// import raindrop from "&/images/vacancies/hero/raindrop-lower.png";
// import raindropPurple from "&/images/vacancies/hero/raindrop-upper.png";

export const ServicesHero = () => {
  return (
    <div className={styles.hero}>
      {/* <div className={styles.glowRed} />
      <div className={styles.glowBlue} />

      <div className={styles.raindrop1}>
        <Image src={raindrop} alt="" />
      </div>

      <div className={styles.raindrop2}>
        <Image src={raindrop} alt="" />
      </div>

      <div className={styles.raindrop3}>
        <Image src={raindropPurple} alt="" />
      </div>

      <div className={styles.raindrop4}>
        <Image src={raindropPurple} alt="" />
      </div> */}

      <div className={styles.text}>
        <h1 className={styles.title}>Услуги</h1>
        <p className={styles.subtitle}>
          Наша компания предлагает комплексные услуги по разработке бэкенда на
          языке python, охватывающие весь процесс от обсуждения первоначальной
          концепции до проектирования архитектуры системы и ее постоянного
          совершенствования.
          <br />
          <br />
          Наша команда экспертов также готова оказать консультационные услуги,
          предлагая ценные идеи и советы в соответствии с потребностями вашего
          бизнеса. Есливам требуется индивидуальное решение, расширение текущей
          команды или специализированный консалтинг, мы готовы помочь вам на
          любой стадии проекта.
        </p>
      </div>
    </div>
  );
};
