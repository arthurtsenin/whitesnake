import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/components";
import { FC } from "react";

type LeaveRequestProps = {
  name: string;
  surname: string;
  email: string;
  phone: string;
  telegram: string;
  linkedIn: string;
  message: string;
  url?: string;
  vacancy: string;
};

export const LeaveRequest: FC<LeaveRequestProps> = ({
  name,
  surname,
  email,
  phone,
  telegram,
  linkedIn,
  message,
  url,
  vacancy,
}) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-gray-200">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                Вы получили данное письмо от формы "Оставить заявку" по
                должности: {vacancy}
              </Heading>
              <Text>
                Кандидат: {name} {surname}
              </Text>
              <Text>Адрес электронной почты: {email}</Text>
              <Hr />
              <Text>Номер телефона: {phone}</Text>
              <Hr />
              <Text>Telegram: {telegram}</Text>
              <Hr />
              <Text>LinkedIn: {linkedIn}</Text>
              <Hr />
              <Text>Сообщение: {message}</Text>
              <Hr />
              <Text>Резюме: {url}</Text>
              <Hr />
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
