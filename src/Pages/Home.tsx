import { ITextContent } from "../models/ITextContent";
import { useSupabase } from "../hooks/useSupabase";

export const Home = () => {
  const [loading, data] = useSupabase<ITextContent[]>("TextContent");

  return (
    <>
      <div className="p-5 sm:p-10 mx-auto max-w-lg">
        <div className="font-sans text-2xl p-4 font-medium">
          Din rörmokare i närheten!
        </div>

        {loading && <h1>Loading..</h1>}
        <div>
          {data?.map((item, index) => (
            <p className="font-sans text-base/7" key={index}>
              {item.content}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};
