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
  email: string;
  message: string;
};

export const BookACallMail: FC<LeaveRequestProps> = ({ email, message }) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-gray-200">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                Вы получили данное письмо от формы "Cвязаться с нами"
              </Heading>

              <Text>Адрес электронной почты: {email}</Text>
              <Hr />

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
