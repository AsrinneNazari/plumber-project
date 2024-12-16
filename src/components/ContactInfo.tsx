import { Mail, Phone } from "lucide-react";

const ContactInfo = () => {
  return (
    <>
<div className="flex-[1] border-l-2 border-lightgray pl-9 pt-10 order-1 lg:order-2">
  <p className="font-semibold font-fjalla text-lx mb-3 text-2xl">
    Kontakta oss direkt
  </p>

  <div className="mt-5 flex items-center">
    <Phone className="h-5" />
    <p className="font-bold ml-2 text-lg">070-1234567</p>
  </div>
  <p className="mt-5">Allmänna frågor: </p>
  <div className="mt-1 flex items-center">
    <Mail className="h-5" />
    <p className="font-bold ml-2">info@melloror.se</p>
  </div>

  <p className="mt-5">För ekonomifrågor:</p>
  <div className="flex items-center mt-1">
    <Mail className="h-5" />
    <p className="font-bold ml-2">ekonomi@melloror.se</p>
  </div>
</div>
    </>
  );
};

export default ContactInfo;
