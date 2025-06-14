import { useEffect, useState } from "react";
import { FaFileAlt, FaCheck } from "react-icons/fa";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar = ({ currentStep, totalSteps }: ProgressBarProps) => {
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);
  const [completedStep, setCompletedStep] = useState<number | null>(null);

  useEffect(() => {
    if (currentStep > 1) {
      setCompletedStep(currentStep - 1);
      const timer = setTimeout(() => setCompletedStep(null), 400);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  return (
    <div className="h-screen w-16 flex flex-col items-center py-4">
      {steps.map((step, index) => {
        const isDone = step < currentStep;
        return (
          <div key={step} className="flex flex-col items-center flex-1">
            <div
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center
                ${isDone
                  ? "bg-blue-600 border-blue-800"
                  : "bg-white border-blue-300"
                }`}
            >
              {isDone ? (
                <FaCheck
                  className={`w-4 h-4 text-white pointer-events-none ${
                    completedStep === step ? "pop-animation" : ""
                  }`}
                />
              ) : (
                <FaFileAlt className="w-3.5 h-3.5 text-blue-800" />
              )}
            </div>

            {/* Line connector */}
            {index < steps.length - 1 && (
              <div
                className={`w-1 flex-1 transition-colors duration-500 ${
                  step < currentStep ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProgressBar;
