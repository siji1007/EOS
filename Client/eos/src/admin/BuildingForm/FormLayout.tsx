import { useState } from "react";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
import ThirdForm from "./ThirdForm";
import FourthForm from "./FourthForm";
import FifthForm from "./FifthForm";
import SixthForm from "./SixthForm";
import SeventhForm from "./SeventhForm";
import EighthForm from "./EigthForm";
import NinthForm from "./NinthForm";
import ProgressBar from "./ProgressBar";

const FormLayout = () => {
  const forms = [
    <FirstForm />,
    <SecondForm />,
    <ThirdForm />,
    <FourthForm />,
    <FifthForm />,
    <SixthForm />,
    <SeventhForm />,
    <EighthForm />,
    <NinthForm />,
  ];
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, forms.length));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = () => {
    // Add your final submission logic here
    alert("Form submitted!");
  };

  return (
    <div className="flex h-full">
      {/* Left Progress Bar */}
      <ProgressBar currentStep={step} totalSteps={forms.length} />

      {/* Right Form Content */}
      <div className="flex-1 p-2 items-center justify-center">
        <h2 className="text-center text-xl font-semibold mb-2">Application Form</h2>

        {forms[step - 1]}

        <div className="flex justify-between mt-4">
          {step > 1 ? (
            <button
              onClick={prevStep}
              className="text-blue-600 font-medium hover:underline"
            >
              &laquo; Back
            </button>
          ) : (
            <div />
          )}

          {step < forms.length ? (
            <button
              onClick={nextStep}
              className="text-blue-600 font-medium hover:underline"
            >
              Next &raquo;
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="text-green-600 font-medium hover:underline"
            >
              Submit &#10003;
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormLayout;
