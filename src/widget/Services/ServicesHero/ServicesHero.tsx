import Image from "next/image";

import styles from "./ServicesHero.module.css";

import heroBg from "&/images/services/heroBg.png";
import leftRaindrop from "&/images/services/leftCorner.png";
import rightRaindrop from "&/images/services/rightCorner.png";

export const ServicesHero = () => {
  return (
    <div className={styles.hero}>
      <Image src={heroBg} alt="" priority fill />

      <div className={styles.rightRaindropWrapper}>
        <Image src={rightRaindrop} alt="" />
      </div>

      <div className={styles.leftRaindropWrapper}>
        <Image src={leftRaindrop} alt="" />
      </div>

      <div className={styles.glowRight} />
      <div className={styles.glowLeft} />

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
