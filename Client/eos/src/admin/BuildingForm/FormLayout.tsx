import { useState } from "react";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
import ThirdForm from "./ThirdForm";
import ProgressBar from "./ProgressBar";

const FormLayout = () => {
  const forms = [<FirstForm />, <SecondForm />, <ThirdForm />]; // Add more forms here
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, forms.length));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="flex h-screen">
      {/* Left Progress Bar */}
      <ProgressBar currentStep={step} totalSteps={forms.length} />

      {/* Right Form Content */}
      <div className="flex-1 p-8">
        <h2 className="text-center text-xl font-semibold mb-6">Application Form</h2>

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

          {step < forms.length && (
            <button
              onClick={nextStep}
              className="text-blue-600 font-medium hover:underline"
            >
              Next &raquo;
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormLayout;
