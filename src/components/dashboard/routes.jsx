import { PatientHistory, Summary, Appointments, PaymentsHistory } from "./sections";

const tabnames = [
    "Summary",
    "Appointments",
    "Patient History",
    "Payments History",
];

const tabcontent = [
    <Summary key={1} />,
    <Appointments key={2} />,
    <PatientHistory key={3} />,
    <PaymentsHistory key={4} />,
];

export { tabnames, tabcontent };