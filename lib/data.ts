import { Bone, Scan, Microscope, Activity, Wrench, Stethoscope, CalendarCheck, Users, Building2, HeartHandshake, Award } from "lucide-react";

export const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Conditions", href: "#conditions" },
  { label: "Patient Information", href: "#patient-information" },
  { label: "Hospitals", href: "#hospitals" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  { icon: Bone, title: "Trauma Surgery", description: "Adult and paediatric trauma care for fractures and orthopaedic injuries." },
  { icon: Scan, title: "Joint Replacement", description: "Hip, knee and shoulder replacements to restore mobility and quality of life." },
  { icon: Microscope, title: "Arthroscopy", description: "Minimally invasive keyhole surgery for joints, sports injuries and more." },
  { icon: Activity, title: "Sports Medicine", description: "Diagnosis, treatment and rehabilitation for sports and activity-related injuries." },
  { icon: Wrench, title: "Reconstruction Surgery", description: "Advanced reconstructive surgery for complex bone and joint conditions." },
  { icon: Stethoscope, title: "General Orthopaedics", description: "Comprehensive care for bones, joints, muscles, tendons and spine." },
];

export const stats = [
  { icon: CalendarCheck, value: "2017", label: "Established in 2017" },
  { icon: Users, value: "1000+", label: "Patients Treated Successfully" },
  { icon: Building2, value: "2", label: "Practising Hospitals" },
  { icon: HeartHandshake, value: "Patient Focused", label: "Care You Can Trust" },
  { icon: Award, value: "Expert Orthopaedic", label: "Care" },
];

export const hospitals = [
  {
    name: "Emalahleni Private Hospital",
    image: "/images/emalahleni.jpg",
    address: ["Suite 201, 2nd Floor", "39 Cnr Mandela & Northey Street", "Witbank, 1034"],
    tel: "+27 13 655 3057 / 8",
  },
  {
    name: "Life Cosmos Hospital",
    image: "/images/hospital-lifecosmos.jpg",
    address: ["Suite 1, First Floor", "C/O OR Tambo & Beatty Avenue", "Witbank, 1034"],
    tel: "+27 13 653 8010",
  },
];

export const credentials = ["MBChB (Natal)", "FC Ortho (SA)", "MMed Ortho (UP)"];