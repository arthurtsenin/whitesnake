"use server";

import { Resend } from "resend";

import { LeaveRequest } from "./ui/emails";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_KEY);

export const sendEmail = async (
  formData: Record<string, string>,
  url: string,
  jobTitle: string,
) => {
  try {
    await resend.emails.send({
      from: "LeaveRequest <whiteSnake@resend.dev>",
      to: "arturcenin@gmail.com",
      subject: "Message from LeaveRequest form",
      reply_to: formData.email as string,
      react: (
        <LeaveRequest
          name={formData.name as string}
          surname={formData.surname as string}
          email={formData.email as string}
          phone={formData.phone as string}
          telegram={formData.telegram as string}
          linkedIn={formData.linkedIn as string}
          message={formData.message as string}
          url={url as string}
          jobTitle={jobTitle || (formData.jobTitle as string)}
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
