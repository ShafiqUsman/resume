import Image from "next/image";
import AboutMe from "./component/about-me";
import { aboutMe, skills, professionalData } from "@/data/page-data";
import ProfessionalExperience from "./component/professional-experience";

export default function Home() {
  return (
    <div className="">
      <AboutMe data={aboutMe} skills={skills} />
      <ProfessionalExperience data={professionalData} />
    </div>
  );
}
