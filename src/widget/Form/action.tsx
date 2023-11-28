"use server";

import { Resend } from "resend";

import { BookACallMail } from "./emails/BookACallMail";
import { LeaveRequestMail } from "./emails/LeaveRequestMail";
import { LeaveRequestVacancyMail } from "./emails/LeaveRequestVacancyMail";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_KEY);

export const leaveRequestVacancyAction = async (
  formData: Record<string, string>,
  url?: string,
  jobTitle?: string,
) => {
  try {
    await resend.emails.send({
      from: "Leave кequest <whiteSnake@resend.dev>",
      to: "arturcenin@gmail.com",
      subject: "Message from LeaveRequest form",
      reply_to: formData.email as string,
      react: (
        <LeaveRequestVacancyMail
          name={formData.name as string}
          surname={formData.surname as string}
          email={formData.email as string}
          phone={formData.phone as string}
          telegram={formData.telegram as string}
          linkedIn={formData.linkedIn as string}
          message={formData.message as string}
          url={url as string}
          jobTitle={jobTitle || (formData.jobTitle as string)}
          company={formData.company as string}
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

export const leaveRequestAction = async (formData: Record<string, string>) => {
  try {
    await resend.emails.send({
      from: "Leave request <whiteSnake@resend.dev>",
      to: "arturcenin@gmail.com",
      subject: "Message from LeaveRequest form",
      reply_to: formData.email as string,
      react: (
        <LeaveRequestMail
          company={formData.company as string}
          email={formData.email as string}
          phone={formData.phone as string}
          message={formData.message as string}
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

export const bookACallAction = async (formData: Record<string, string>) => {
  try {
    await resend.emails.send({
      from: "Book a call <whiteSnake@resend.dev>",
      to: "arturcenin@gmail.com",
      subject: "Message from BookACall form",
      reply_to: formData.email as string,
      react: (
        <BookACallMail
          email={formData.email as string}
          message={formData.message as string}
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
