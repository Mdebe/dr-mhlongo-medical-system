import {   Scan, Microscope,   Wrench,   CalendarCheck, Users, Building2, HeartHandshake, Award } from "lucide-react";
import { Bone, HeartPulse, Activity, ShieldAlert, Stethoscope, FileText, Baby } from "lucide-react";
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Conditions", href: "/conditions" },
  { label: "Patient Information", href: "/patient-information" },
  { label: "Hospitals", href: "/hospitals" },
  { label: "Contact", href: "/contact" },
];

// For sections that still live on the homepage
export const homeSectionLinks = {
  about: "/#about",
  services: "/#services",
  conditions: "/#conditions",
  patientInfo: "/#patient-information",
  hospitals: "/#hospitals",
  contact: "/#contact",
  book: "/#book",
};

 

export const services = [
  {
    title: "Joint Replacements",
    description: "Hip and knee arthroplasty with modern implants for lasting pain relief and mobility.",
    icon: Bone,
    href: "/services/joint-replacement",
  },
  {
    title: "Shoulder Conditions",
    description: "Shoulder impingement and rotator cuff repair using minimally invasive techniques.",
    icon: Activity,
    href: "/services/shoulder",
  },
  {
    title: "Pain Management",
    description: "Backache, multiple joint pains and fibromyalgia – diagnosis and tailored pain control.",
    icon: HeartPulse,
    href: "/services/pain-management",
  },
  {
    title: "Trauma",
    description: "Fractures, dislocations, tendon injuries and soft tissue injuries – 24hr trauma cover.",
    icon: ShieldAlert,
    href: "/services/trauma",
  },
  {
    title: "Limb Deformity Correction",
    description: "Children and adult deformity correction, limb reconstruction and alignment surgery.",
    icon: Baby,
    href: "/services/deformity-correction",
  },
  {
    title: "Tumours and Sepsis",
    description: "Benign and malignant bone & soft tissue tumours, infection and sepsis management.",
    icon: Stethoscope,
    href: "/services/tumours-sepsis",
  },
  {
    title: "Medico-Legal Services",
    description: "Independent assessments, injury quantification and comprehensive medico-legal reports.",
    icon: FileText,
    href: "/services/medico-legal",
  },
] as const;

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
    slug: "emalahleni-private",
    image: "/images/emalahleni.jpg",
    address: ["Suite 201, 2nd Floor", "39 Cnr Mandela & Northey Street", "Witbank, 1034"],
    tel: "+27 13 655 3057 / 8",
  },
  {
    name: "Life Cosmos Hospital",
    slug: "life-cosmos",
    image: "/images/hospital-lifecosmos.jpg",
    address: ["Suite 1, First Floor", "C/O OR Tambo & Beatty Avenue", "Witbank, 1034"],
    tel: "+27 13 653 8010",
  },
];

export const credentials = ["MBChB (Natal)", "FC Ortho (SA)", "MMed Ortho (UP)"];