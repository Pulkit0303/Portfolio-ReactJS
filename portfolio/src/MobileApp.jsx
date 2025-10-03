import Second from "./mobile/Second";
import MainPage from "./mobile/MainPage";
import ContactMe from "./mobile/ContactMe";

function MobileApp() {
  return (
    <div className="h-screen w-screen snap-y snap-mandatory overflow-y-scroll">
      <section className="h-screen snap-start">
        <MainPage />
      </section>
      <section className="h-screen snap-start">
        <Second />
      </section>
      <section className="h-screen snap-start">
        <ContactMe />
      </section>
    </div>
  );
}

export default MobileApp;
