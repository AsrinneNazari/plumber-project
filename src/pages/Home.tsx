import LSlogo from "./../img/LFlogo.png";
import Title from "../components/Title";
import useSupabase from "../hooks/useSupabase";
import ITextContent from "../models/ITextContent";
import ContactInfo from "../components/ContactInfo";

const Home = () => {
  const [loading, data] = useSupabase<ITextContent[]>("TextContent");

  return (
    <>
      <div className="p-5 sm:p-5 mx-auto max-w-7xl flex flex-col lg:flex-row gap-10">
        <div className="flex-[1] border-l-2 border-lightgray pt-10 pb-8 pl-9 order-1 lg:order-2">
          <p className="font-semibold font-fjalla text-lx mb-3 text-2xl lg:whitespace-nowrap">
            Hej och välkommen till Mello Rör!
          </p>
          <p>
            Vi är fullt försäkrade genom Länsförsäkringar, vilket ger dig som
            kund extra trygghet vid varje uppdrag.
          </p>
          <img src={LSlogo} alt="Länsförsäkringar" className="w-40" />
          <ContactInfo />
        </div>

        <div className="flex-[2] order-2 lg:order-1">
          <Title titleText="Din rörmokare i närheten" />

          {loading && <h1>Loading..</h1>}
          <div>
            {data?.map((item, index) => (
              <p className="mb-4" key={index}>
                {item.title !== "about" ? item.content : null}
              </p>
            ))}
            <p className="text-lg font-semibold">Om oss</p>
            {data?.map((item, index) => (
              <section className="mb-4" key={index}>
                {item.title === "about" ? item.content : null}
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
