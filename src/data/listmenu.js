import {
  MdConfirmationNumber,
  MdApps,
  MdPublic,
  MdRecordVoiceOver,
  MdTapAndPlay,
  MdAssessment,
} from "react-icons/md";

export const listMenu = [
  {
    nama: "Dashboard",
    icon: <MdApps style={{ marginRight: 5 }}></MdApps>,
    link: "dashboard",
  },
  {
    nama: "Eticket",
    icon: (
      <MdConfirmationNumber style={{ marginRight: 5 }}></MdConfirmationNumber>
    ),
    link: "eticket",
  },
  {
    nama: "Publish",
    icon: <MdPublic style={{ marginRight: 5 }}></MdPublic>,
    link: "publish",
  },
  {
    nama: "Broadcast",
    icon: <MdRecordVoiceOver style={{ marginRight: 5 }}></MdRecordVoiceOver>,
    link: "broadcast",
  },
  {
    nama: "Blasting",
    icon: <MdTapAndPlay style={{ marginRight: 5 }}></MdTapAndPlay>,
    link: "blasting",
  },
  {
    nama: "Reporting",
    icon: <MdAssessment style={{ marginRight: 5 }}></MdAssessment>,
    link: "reporting",
  },
];

export const Dummy = [
  {
    nama: "tes",
  },
  {
    nama: "tes",
  },
  {
    nama: "tes",
  },
  {
    nama: "tes",
  },
  {
    nama: "tes",
  },
  {
    nama: "tes",
  },
  {
    nama: "tes",
  },
  {
    nama: "tes",
  },
  {
    nama: "tes",
  },
];
