import Image from "next/image";

import styles from "./HealhMonitoring.module.css";

import { Container } from "@/shared";
import { CaseChallenge } from "@/widget/Case/CaseChallenge/CaseChallenge";
import { CaseCustomer } from "@/widget/Case/CaseCustomer/CaseCustomer";
import { CaseResults } from "@/widget/Case/CaseResults/CaseResults";
import { CaseSolution } from "@/widget/Case/CaseSolution/CaseSolution";
// import { SolutionItem } from "@/widget/Case/CaseSolution/ui/CaseItem/SolutionItem";
import { CaseTeam } from "@/widget/Case/CaseTeam/CaseTeam";
import { CaseTechnologyStack } from "@/widget/Case/CaseTechnologyStack/CaseTecnologyStack";
import { Divider } from "@/widget/Case/ui/Divider/Divider";

import { HEALTH_MONITORING_DATA } from "./data";

import dashboardService from "&/images/cases/healthMonitoring/dashboardService.webp";
import dataProcessing from "&/images/cases/healthMonitoring/dataProcessing.webp";
import deviceService from "&/images/cases/healthMonitoring/deviceService.webp";

export const HealthMonitoring = () => {
  return (
    <Container>
      <CaseCustomer
        title={HEALTH_MONITORING_DATA.customer_title}
        stats={HEALTH_MONITORING_DATA.customer_stats}
        info={HEALTH_MONITORING_DATA.customer_info}
      />
      <Divider />
      <CaseChallenge
        title={HEALTH_MONITORING_DATA.challenge_title}
        info={HEALTH_MONITORING_DATA.challenge_info}
      />
      <Divider />
      <CaseSolution
        title={HEALTH_MONITORING_DATA.solution_title}
        subtitle={HEALTH_MONITORING_DATA.solution_info.subtitle}
      >
        <div className={styles.container}>
          <div className={`${styles.text} ${styles.text1}`}>
            <div className={styles.title}>Сервис обслуживания устройства</div>
            <div className={styles.description}>
              Первой частью решения стало внедрение сервиса по обслуживанию
              устройств, который отвечает за бесперебойную передачу данных с
              различных носимых устройств в систему.
            </div>
            <div className={styles.description}>
              Сервис надежно обрабатывает зашифрованные потоки данных,
              обеспечивая аутентификацию устройств, обнаружение ошибок и
              безопасную обработку, тем самым поддерживая целостность и
              конфиденциальность данных о состоянии здоровья пациента."
            </div>

            <div className={styles.title}>
              Сервис обработки и анализа данных
            </div>

            <div className={styles.description}>
              Данный сервис отвечает за обработку и углубленный анализ
              показателей здоровья пациента в режиме реального времени. Он
              отвечает за анализ собранных данных, используя алгоритмы машинного
              обучения, и отслеживает любые потенциальные риски для здоровья,
              основываясь на заданных параметрах.
            </div>
            <div className={styles.description}>
              Безопасность данных — важная составляющая проекта. Для обеспечения
              целостности и конфиденциальности данных мы ввели строгий контроль
              доступа и внедрили надежные методы шифрования. Система была
              разработана в соответствии со строгими стандартами обработки
              медицинских данных, например HIPAA."
            </div>
          </div>

          <div className={`${styles.wrapper} ${styles.image1}`}>
            <Image src={deviceService} alt="" />
          </div>

          <div className={`${styles.text} ${styles.text2}`}>
            <div className={styles.title}>Сервис уведомлений</div>
            <div className={styles.description}>
              Далее было необходимо создать сервис уведомлений. Как только у
              пациента появляются потенциальные риски для здоровья, запускается
              сервис уведомлений. Он быстро рассылает оповещения как
              пользователям, так и медицинским работникам. Такие оперативные
              оповещения позволяют своевременно начать действовать и таким
              образом предотвратить обострение потенциальных проблем со
              здоровьем.
            </div>
          </div>

          <div className={`${styles.wrapper} ${styles.image2}`}>
            <Image src={dataProcessing} alt="" />
          </div>

          <div className={`${styles.text} ${styles.text3}`}>
            <div className={styles.title}>Сервисная панель</div>
            <div className={styles.description}>
              Заключительным этапом стала разработка сервисной панели. Эта
              услуга предоставляет функциональную панель мониторинга врачам и
              медицинским работникам.
            </div>
            <div className={styles.description}>
              Панель консолидирует и отображает собранные показатели здоровья в
              удобной для пользователя форме, помогая медицинскому персоналу
              эффективно отслеживать состояние здоровья пациентов и
              интерпретировать полученные данные.
            </div>
            <div className={styles.description}>
              Эта функция позволяет медицинским работникам прогнозировать
              возможное развитие заболеваний и принимать предупреждающие меры по
              уходу за пациентами.
            </div>
          </div>

          <div className={`${styles.wrapper} ${styles.image3}`}>
            <Image src={dashboardService} alt="" />
          </div>
        </div>
      </CaseSolution>
      <Divider />
      <CaseResults
        title={HEALTH_MONITORING_DATA.results_title}
        text={HEALTH_MONITORING_DATA.results_info.summary}
        cubes={HEALTH_MONITORING_DATA.results_cubes}
      />
      <Divider />
      <CaseTeam
        title={HEALTH_MONITORING_DATA.team_title}
        data={HEALTH_MONITORING_DATA.team_info}
      />
      <Divider />
      <CaseTechnologyStack
        title={HEALTH_MONITORING_DATA.stack_title}
        stack={HEALTH_MONITORING_DATA.stack_info}
      />
    </Container>
  );
};
