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
  company: string;
  email: string;
  phone: string;
  message: string;
};

export const LeaveRequestMail: FC<LeaveRequestProps> = ({
  company,
  email,
  phone,
  message,
}) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-gray-200">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                Вы получили данное письмо от формы "Оставить заявку"
              </Heading>

              <Text>Компания: {company}</Text>
              <Text>Адрес электронной почты: {email}</Text>
              <Hr />

              {phone && (
                <>
                  <Text>Номер телефона: {phone}</Text>
                  <Hr />
                </>
              )}

              {message && (
                <>
                  <Text>Сообщение: {message}</Text>
                  <Hr />
                </>
              )}
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
