import { Mail, Phone } from "lucide-react";

const ContactInfo = () => {
  return (
    <>
      <div className="flex-[1] pt-10 order-1 lg:order-2">
        <p className="font-semibold font-fjalla text-lx mb-3 text-2xl">
          Kontakta oss direkt
        </p>

        <div className="mt-5 flex items-center">
          <Phone className="h-5" />
          <a
            href="tel:0701234567"
            className="font-bold ml-2 text-lg text-linkblue hover:text-black"
          >
            070-1234567
          </a>
        </div>
        <div className="mt-5">
          <p>Allmänna frågor:</p>
          <div className="mt-1 flex items-center">
            <Mail className="h-5" />
            <a
              href="mailto:info@melloror.se"
              className="font-bold ml-2 text-linkblue hover:text-black"
            >
              info@melloror.se
            </a>
          </div>
        </div>

        <div className="mt-5">
          <p>För ekonomifrågor:</p>
          <div className="flex items-center mt-1">
            <Mail className="h-5" />
            <a
              href="mailto:ekonomi@melloror.se"
              className="font-bold ml-2 text-linkblue hover:text-black"
            >
              ekonomi@melloror.se
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
