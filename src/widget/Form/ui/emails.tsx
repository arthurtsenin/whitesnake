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
  jobTitle?: string;
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
  jobTitle,
}) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-gray-200">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                {jobTitle ? (
                  <>
                    Вы получили данное письмо от формы "Оставить заявку" по
                    должности: {jobTitle}
                  </>
                ) : (
                  <>Оставить заявку на стажировку</>
                )}
              </Heading>

              <Text>
                Кандидат: {name} {surname}
              </Text>
              <Text>Адрес электронной почты: {email}</Text>
              <Hr />

              {phone && (
                <>
                  <Text>Номер телефона: {phone}</Text>
                  <Hr />
                </>
              )}

              {telegram && (
                <>
                  <Text>Telegram: {telegram}</Text>
                  <Hr />
                </>
              )}

              {linkedIn && (
                <>
                  <Text>LinkedIn: {linkedIn}</Text>
                  <Hr />
                </>
              )}

              {message && (
                <>
                  <Text>Сообщение: {message}</Text>
                  <Hr />
                </>
              )}

              {url && (
                <>
                  <Text>Резюме: {url}</Text>
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
