import Image from "next/image";
import Link from "next/link";
import { Envelope, Linkedin } from "./icons";

const Sidebar = ({ data }) => {
  const { name, role, education, technicalSkills, contactLinks } = data;
  return (
    <div className="bg-black flex flex-col h-auto content-between w-full sm:justify-around sm:h-screen sm:w-1/3 sm:fixed ">
      <div className="text-white flex flex-col p-10 items-center">
        <Image
          priority
          width={300}
          height={300}
          src="/shafiq_pic3.jpg"
          alt="Shafiq profile pic"
          className="rounded-full h-full mb-6 "
        />
        <h1 className="mb-2">{name}</h1>
        <h2 className="mb-8">{role}</h2>
        <p className="mb-2">{education[0]}</p>
        <p className="mb-2">{education[1]}</p>

        <div className="text-white text-center mb-4 mt-4 sm:mt-8">
          <h3 className="mb-2">CONTACT ME</h3>
          <div className="flex flex-row justify-center gap-1.5 items-center">
          <Link href={contactLinks?.[0]} aria-label={'email link'} className="icons-contactme">
            {" "}
            <Envelope />
          </Link>
          <Link href={contactLinks?.[1]} aria-label={'linkedin link'} target="_blank" className="icons-contactme">
            {" "}
            <Linkedin />
          </Link>
          <Link href={contactLinks?.[2]} aria-label={'github link'} target="_blank" className="icons-contactme">
            {" "}
            <Image src='/github.png' alt="github icon" width={22} height={22}/>
          </Link>
          <Link href={contactLinks?.[3]} aria-label={'whatsapp link'} target="_blank" className="icons-contactme">
            {" "}
            <Image src='/whatsapp.png' alt="whatsapp icon" width={26} height={26}/>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
