import { useSupabase } from "../hooks/useSupabase";
import { ITextContent } from "../models/ITextContent";

export const About = () => {
  const [loading, data] = useSupabase<ITextContent[]>("TextContent");

  /* Future aboutpage here! */

  return (
    <>
      <div className="p-5 sm:p-5 mx-auto max-w-7xl flex flex-col lg:flex-row">
        <div className="flex-[2] order-2 lg:order-1">
          <div className="font-sans text-3xl p-4 font-medium">Om oss</div>
          <div className="max-w-xl">
            {loading && <h1>Loading..</h1>}
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
