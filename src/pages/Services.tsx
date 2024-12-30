import ContactInfo from "../components/ContactInfo";
import useSupabase from "../hooks/useSupabase";
import Title from "../components/Title";
import IServiceContent from "../models/IServiceContent";

const Services = () => {
  const [loading, data] = useSupabase<IServiceContent[]>("ServiceContent");

  return (
    <>
      <div className="p-5 sm:p-5 mx-auto max-w-7xl flex flex-col lg:flex-row gap-10">
        <ContactInfo />
        <div className="flex-[2] order-2 lg:order-1">
          <Title titleText="Våra tjänster" />
          <div className="max-w-xl">
            {loading && <h1>Loading..</h1>}
            {data?.map((item, index) => (
              <section className="mb-4" key={index}>
                <p className="text-lg font-semibold"> {item.title}</p>
                {item.description}
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
