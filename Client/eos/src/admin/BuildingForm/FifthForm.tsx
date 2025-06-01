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
        <div className="bg-white rounded-lg p-6 w-full shadow-lg relative align-center mx-auto mt-8">
        <h3 className="text-xl font-semibold mb-6 text-center">Progress Flow in</h3>

        <div className="space-y-4">
            {departments.map((department, idx) => (
            <div key={idx} className="grid grid-cols-4 gap-2 items-center">
                <label className="font-medium">{department}</label>
                <div className='grid grid-cols-2 gap-3'>
                    <input
                    type="time"
                    value={formData[idx].time}
                    onChange={(e) => handleInputChange(idx, 'time', e.target.value)}
                    className="w-full border rounded px-4 py-2 text-center"
                    placeholder="--"
                    />
                    <input
                    type="date"
                    value={formData[idx].date}
                    onChange={(e) => handleInputChange(idx, 'date', e.target.value)}
                    className="w-full border rounded px-4 py-2 text-center"
                    />
                </div>
                    
                    <input
                    type="text"
                    placeholder="Remarks"
                    value={formData[idx].remarks}
                    onChange={(e) => handleInputChange(idx, 'remarks', e.target.value)}
                    className="w-full border rounded px-4 py-2"
                    />
                    <select 
                    value={formData[idx].status}
                    onChange={(e) => handleInputChange(idx, 'status', e.target.value)}
                    className="w-full border rounded px-4 py-2 text-center"
                    >

                    {/*IDK KUNG PARA SAAN UNG DROPDOWN HAHAHA*/}
                    <option value="status">Status</option>
                    <option value="done">Finished</option>
                    <option value="discard">Discarded</option>
                    <option value="halt">Halted</option>
                </select>
            </div>
            ))}
        </div>
        </div>
    );
}

export default FifthForm;