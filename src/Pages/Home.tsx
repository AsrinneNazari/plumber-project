import { ITextContent } from "../models/ITextContent";
import { useSupabase } from "../hooks/useSupabase";
import LSlogo from "./../img/LFlogo.png";

export const Home = () => {
  const [loading, data] = useSupabase<ITextContent[]>("TextContent");

  return (
    <>
      <div className="p-5 sm:p-5 mx-auto max-w-7xl flex flex-col lg:flex-row gap-10">
        <div className="flex-[1] border-l-2 border-lightgray pl-9 pt-10 order-1 lg:order-2">
          <p className="font-semibold font-fjalla text-lx mb-3 text-2xl whitespace-nowrap">
            Hej och välkommen till Mello Rör!
          </p>
          <p>
            Vi är fullt försäkrade genom Länsförsäkringar, vilket ger dig som
            kund extra trygghet vid varje uppdrag.
          </p>
          <img src={LSlogo} alt="Länsförsäkringar" className="w-40" />
          <p className="font-semibold font-fjalla text-lx mb-3 text-2xl mt-8 ">
            Kontakta oss direkt
          </p>
          <p className="font-bold">Telefonnummer: 070-1234567</p>
        </div>

        <div className="flex-[2] order-2 lg:order-1">
          <div className="font-sans text-3xl p-4 font-medium">
            Din rörmokare i närheten!
          </div>

          {loading && <h1>Loading..</h1>}
          <div>
            {data?.map((item, index) => (
              <p className="mb-4" key={index}>
                {item.title !=="about" ? item.content : null}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
