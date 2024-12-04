import { ITextContent } from "../models/ITextContent";
import { useSupabase } from "../hooks/useSupabase";
import LSlogo from "./../img/LFlogo.png";

export const Home = () => {
  const [loading, data] = useSupabase<ITextContent[]>("TextContent");

  return (
    <>
      <div className="p-5 sm:p-5 mx-auto max-w-7xl flex gap-3">
        <div className="flex-[3]">
          <div className="font-sans text-3xl p-4 font-medium">
            Din rörmokare i närheten!
          </div>
          

          {loading && <h1>Loading..</h1>}
          <div>
            {data?.map((item, index) => (
              <p className="mb-4" key={index}>
                {item.content}
              </p>
            ))}
          </div>
        </div>
        <div className=" flex-[1] border-l-2 pl-9 pt-10">
          <p className="font-semibold font-sans text-lx mb-3">
            Hej och välkommen till Mello Rör!
          </p>
          <p>
            Vi är fullt försäkrade genom Länsförsäkringar, vilket ger dig som
            kund extra trygghet vid varje uppdrag.
          </p>
          <img src={LSlogo} alt="Länsförsäkringar" className="w-40"/>
        </div>
      </div>
    </>
  );
};
