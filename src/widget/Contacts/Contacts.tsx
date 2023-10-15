import { FC } from "react";

import styles from "./Contacts.module.css";

import { ContactCard } from "@/shared/ui/ContactCard/ContactCard";
import { Title } from "@/shared/ui/Title/Title";
import { TitleProps } from "@/shared/ui/Title/Title";

import { ContactType } from "./data";
import { Container } from "../../shared";

export type ContactsProps = {
  contacts: Array<ContactType>;
} & TitleProps;

export const Contacts: FC<ContactsProps> = ({ title, subtitle, contacts }) => {
  return (
    <Container>
      <section className={styles.container}>
        <Title title={title} subtitle={subtitle} />
        <div className={styles.contactsWrapper}>
          {contacts.map((contact) => (
            <ContactCard
              key={contact.id}
              url={contact.url}
              title={contact.title}
              description={contact.description}
            />
          ))}
        </div>
      </section>
    </Container>
  );
};
