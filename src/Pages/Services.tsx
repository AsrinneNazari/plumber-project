import { IServiceContent } from "../models/IServiceContent";
import { useSupabase } from "../hooks/useSupabase";

export const Services = () => {
  const [loading, data] = useSupabase<IServiceContent[]>("ServiceContent");

  return (
    <>
      {loading && <h1>Loading..</h1>}
      <div className="p-5 sm:p-5 mx-auto max-w-7xl flex flex-col">
        <div className="font-sans text-3xl p-4 font-medium">Våra tjänster</div>
        {data?.map((item, index) => (
          <section className=" sm:p-3 mx-auto max-w-2xl p-1" key={index}>
            <p className="font-bold"> {item.title}</p>
            {item.description}
          </section>
        ))}
      </div>
    </>
  );
};
