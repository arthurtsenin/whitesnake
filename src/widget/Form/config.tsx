import { BookACallForm } from "./BookACall/BookACall";
import { LeaveRequestForm } from "./LeaveRequest/LeaveRequest";
export type FormsConfigType = Record<string, JSX.Element>;

export const FORMS: FormsConfigType = {
  BookACall: <BookACallForm />,
  LeaveRequest: <LeaveRequestForm />,
};
