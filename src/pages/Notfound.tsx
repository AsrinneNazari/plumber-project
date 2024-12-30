import Button from "../components/Button";
import leakingPipe from "./../img/leakingPipe.png";

const NotFound = () => {
  return (
    <>
      <div className="p-5 sm:p-5 mx-auto max-w-3xl flex flex-col lg:flex-col gap-10">
        <div className="flex items-center flex-col justify-center min-h-screen">
          <h1 className="text-8xl">404</h1>
          <h3 className="text-5xl pb-6">Page not found!</h3>
          <img src={leakingPipe} alt="Leaking Pipe" className="w-80 m-10" />
          <Button to="/" buttonText="Tillbaka till startsidan" />
        </div>
      </div>
    </>
  );
};
export default NotFound;
