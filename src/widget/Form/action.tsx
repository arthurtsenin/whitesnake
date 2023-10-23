"use server";

import { Resend } from "resend";

import { FORM_KEYS } from "./formKeys";
import { LeaveRequest } from "./ui/emails";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_KEY);

export const sendEmail = async (formData: FormData) => {
  const name = formData.get(FORM_KEYS.name);
  const surname = formData.get(FORM_KEYS.surname);
  const email = formData.get(FORM_KEYS.email);
  const phone = formData.get(FORM_KEYS.phone);
  const telegram = formData.get(FORM_KEYS.telegram);
  const linkedIn = formData.get(FORM_KEYS.linkedIn);
  const message = formData.get(FORM_KEYS.message);
  const url = formData.get(FORM_KEYS.url);
  const jobTitle = formData.get(FORM_KEYS.jobTitle);

  try {
    await resend.emails.send({
      from: "LeaveRequest <whiteSnake@resend.dev>",
      to: "arturcenin@gmail.com",
      subject: "Message from LeaveRequest form",
      reply_to: email as string,
      react: (
        <LeaveRequest
          name={name as string}
          surname={surname as string}
          email={email as string}
          phone={phone as string}
          telegram={telegram as string}
          linkedIn={linkedIn as string}
          message={message as string}
          url={url as string}
          jobTitle={jobTitle as string}
        />
      ),
    });
    return { success: "Заявка отправлена!" };
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    } else {
      return { error: "Что-то пошло не так" };
    }
  }
};
