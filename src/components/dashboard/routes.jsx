import { BillingInfo, PatientDetails, Appointments, Payments } from "./sections";

const tabnames = [
    "Summary",
    "Appointments",
    "Find Patient",
    "Payments",
];

const tabcontent = [
    <PatientDetails key={1} />,
    <Appointments key={2} />,
    <BillingInfo key={3} />,
    <Payments key={4} />,
];

export { tabnames, tabcontent };