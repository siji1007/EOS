import { useState } from 'react';

const FifthForm = () => {
    const departments = [
    "Receiving and Receiving",
    "Land Use and Zoning", 
    "Geodetic (Line and Grade)",
    "Architectural",
    "Structural",
    "Sanitary",
    "Electrical",
    "Mechanical"
  ];

  const [formData, setFormData] = useState(
    departments.map(() => ({
      time: "",
      date: "",
      remarks: "",
      status: "⌄"
    }))
  );

  const handleInputChange = (index: number, field: string, value: string) => {
    const updatedData = [...formData];
    updatedData[index] = { ...updatedData[index], [field]: value };
    setFormData(updatedData);
  };
    return (
        <div className="rounded-lg w-full relative align-center mx-auto mt-8">
        <h3 className="text-xl font-semibold mb-6 text-center">Progress Flow in</h3>

        <div className="space-y-4">
            {departments.map((department, idx) => (
            <section key={idx} className="grid grid-cols-4 gap-2 items-center relative w-full mt-6 px-3">
                <label htmlFor={`department-${idx}`} className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black font-medium">{department}</label>
                <div className='grid grid-cols-2 gap-3 col-span-1'>
                    <input
                    id={`time-${idx}`}
                    type="time"
                    value={formData[idx].time}
                    onChange={(e) => handleInputChange(idx, 'time', e.target.value)}
                    className="w-full border border-black rounded px-4 py-2 text-center focus:outline-none"
                    placeholder="--"
                    title="Time"
                    />
                    <input
                    id={`date-${idx}`}
                    type="date"
                    value={formData[idx].date}
                    onChange={(e) => handleInputChange(idx, 'date', e.target.value)}
                    className="w-full border border-black rounded px-4 py-2 text-center focus:outline-none"
                    placeholder="Date"
                    title="Date"
                    />
                </div>
                <input
                    id={`remarks-${idx}`}
                    type="text"
                    placeholder="Remarks"
                    value={formData[idx].remarks}
                    onChange={(e) => handleInputChange(idx, 'remarks', e.target.value)}
                    className="w-full border border-black rounded px-4 py-2 focus:outline-none"
                    title="Remarks"
                />
                <select 
                    id={`status-${idx}`}
                    value={formData[idx].status}
                    onChange={(e) => handleInputChange(idx, 'status', e.target.value)}
                    className="w-full border border-black rounded px-4 py-2 text-center focus:outline-none"
                    title="Status"
                >
                    <option value="status">Status</option>
                    <option value="done">Finished</option>
                    <option value="discard">Discarded</option>
                    <option value="halt">Halted</option>
                </select>
            </section>
            ))}
        </div>
        </div>
    );
}

export default FifthForm;
