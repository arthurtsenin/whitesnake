import cn from "classnames";
import { FC } from "react";

import styles from "./Indicators.module.css";

type IndicatorsPropsType = {
  ids: Array<number>;
  activeItemId: number;
};

export const Indicators: FC<IndicatorsPropsType> = ({ ids, activeItemId }) => {
  return (
    <div className={styles.container}>
      {ids.map((id) => (
        <button
          key={id}
          data-slide-to={id}
          className={cn(styles.indicator, {
            [styles.active]: id === activeItemId,
          })}
          aria-current={id === activeItemId}
          aria-label={`Hiring step ${id}`}
        />
      ))}
    </div>
  );
};
