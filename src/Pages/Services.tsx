import { IServiceContent } from "../models/IServiceContent";
import { useSupabase } from "../hooks/useSupabase";

export const Services = () => {
  const [loading, data] = useSupabase<IServiceContent[]>("ServiceContent");

  return (
    <>
      {loading && <h1>Loading..</h1>}
      <div className="font-sans text-base/6 p-7 sm:p-4 mx-auto max-w-lg">
        <h2 className="text-xl">Vi erbjuder:</h2>
        {data?.map((item, index) => (
          <section className=" sm:p-4 mx-auto max-w-lg" key={index}>
            <p className="font-bold"> {item.title}</p>
            {item.description}
          </section>
        ))}
      </div>
    </>
  );
};
