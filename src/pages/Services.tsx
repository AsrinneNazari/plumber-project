import ContactInfo from "../components/ContactInfo";
/* import useSupabase from "../hooks/useSupabase"; */
import Title from "../components/Title";
/* import IServiceContent from "../models/IServiceContent"; */

const Services = () => {
  /*   const [loading, data] = useSupabase<IServiceContent[]>("ServiceContent"); */

  return (
    <>
      <div className="p-5 sm:p-5 mx-auto max-w-7xl flex flex-col lg:flex-row gap-10">
        <div className="flex-[1] border-l-2 border-lightgray pt-10 pb-8 pl-9 order-1 lg:order-2">
          <ContactInfo />
        </div>
        <div className="flex-[2] order-2 lg:order-1">
          <Title titleText="Våra tjänster" />
          <div className="max-w-xl">
            {/*             {loading && <h1>Loading..</h1>}
          {  {data?.map((item, index) => (
              <section className="mb-4" key={index}>
                <p className="text-lg font-semibold"> {item.title}</p>
                {item.description}
              </section>
            ))}} */}
            <section className="mb-4">
              <p className="text-lg font-semibold">Stambyte </p>
              Vi på Mello Rör AB erbjuder professionella och tryggt utförda
              stambyten för både privatpersoner och fastighetsägare. Ett
              stambyte innebär att vi byter ut gamla och slitna rör och
              ledningar i fastigheten för att säkerställa att vatten- och
              avloppssystem fungerar som de ska. Detta är en viktig åtgärd för
              att förebygga framtida vattenskador och förlänga livslängden på
              fastighetens VVS-system.
            </section>
            <section className="mb-4">
              <p className="text-lg font-semibold">Varmvattenberedare </p>
              Installation och service av varmvattenberedare Vi på Mello Rör AB
              erbjuder installation, service och reparation av
              varmvattenberedare för både hushåll och företag. Oavsett om du
              behöver en ny varmvattenberedare eller vill optimera din
              befintliga, hjälper vi dig att hitta den bästa lösningen för dina
              behov.
            </section>
            <section className="mb-4">
              <p className="text-lg font-semibold">VVS-besiktning</p>
              Vi erbjuder noggranna och professionella VVS-besiktningar för att
              säkerställa att dina vatten-, värme- och avloppssystem är i gott
              skick. En regelbunden besiktning hjälper till att identifiera
              potentiella problem i tid och förebygga kostsamma skador.
            </section>
            <section className="mb-4">
              <p className="text-lg font-semibold">
                VVS-installation och renovering i badrum och kök
              </p>
              Vi erbjuder kompletta lösningar för VVS-arbeten i både badrum och
              kök. Vi hjälper dig med allt från nyinstallationer till renovering
              av befintliga system. Med vårt fokus på kvalitet och hållbarhet
              säkerställer vi att dina vatten- och avloppssystem fungerar
              optimalt, samtidigt som vi uppfyller alla krav på säkerhet och
              komfort.
            </section>
            <section className="mb-4">
              <p className="text-lg font-semibold">
                Bygg- och renoveringstjänster
              </p>
              Mello Rör AB erbjuder inte bara VVS-tjänster utan även bygg- och
              renoveringstjänster för att ge dig en helhetslösning. Oavsett om
              du planerar att bygga nytt, renovera ditt hem eller uppgradera din
              fastighet, står vi redo att hjälpa dig genom hela processen.
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
