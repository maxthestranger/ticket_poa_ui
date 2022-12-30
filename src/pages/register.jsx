import { useState } from "react";
import logo from "../assets/img/logo.svg";
import ContactForm from "../components/auth/contactForm";
import InfoForm from "../components/auth/infoForm";
import DetailsForm from "../components/auth/detailsForm";

function Register() {
  const [activeTab, setActiveTab] = useState({
    contact: true,
    info: false,
    details: false,
  });

  function handleTabChange(tab) {
    setActiveTab({
      contact: false,
      info: false,
      details: false,
      [tab]: true,
    });
  }
  return (
    <div className="flex min-h-screen w-full items-center justify-center flex-col bg-secondary border-t-8 border-primary border-solid">
      <img src={logo} alt="logo" className="mx-auto mb-10" />
      <div className="flex items-center justify-between gap-10">
        <div className="flex flex-col items-center justify-center gap-4">
          <div
            className="flex items-center justify-center border border-dashed border-primary p-5 w-8 h-8 rounded-full text-primary font-bold text-sm"
            onClick={() => handleTabChange("contact")}
          >
            1
          </div>
          <p className="text-sm font-normal text-primary">Main Contact</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <div
            className="flex items-center justify-center border border-dashed border-dark p-5 w-8 h-8 rounded-full text-dark font-bold text-sm"
            onClick={() => handleTabChange("info")}
          >
            2
          </div>
          <p className="text-sm font-normal text-dark">General Info</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <div
            className="flex items-center justify-center border border-dashed border-dark p-5 w-8 h-8 rounded-full text-dark font-bold text-sm"
            onClick={() => handleTabChange("details")}
          >
            3
          </div>
          <p className="text-sm font-normal text-dark">Company Details</p>
        </div>
      </div>
      <div className="bg-white text-dark rounded-[40px] mx-auto mt-5 p-16 min-w-[568px]">
        <h1 className="text-2xl text-dark font-bold mb-3">
          Apply to be an Agent
        </h1>

        {activeTab.contact && <ContactForm />}
        {activeTab.info && <InfoForm />}
        {activeTab.details && <DetailsForm />}
      </div>
    </div>
  );
}

export default Register;
