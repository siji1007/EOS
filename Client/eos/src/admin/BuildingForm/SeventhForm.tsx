import {useState} from "react";

const SeventhForm = () => {
    const [formData, setFormData] = useState({
    prcRegNo: '',
    dateIssued: '',
    printName: '',
    placeIssued: '',
    address: '',
    ptrNo: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="rounded-lg w-full  mx-auto">
      <h1 className="text-2xl text-center mb-8">With Consent</h1>
      
      <div className="grid grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* PRC REG NO. */}
          <div>
            <label className="block mb-2 font-semibold">PRC REG NO.</label>
            <input 
              type="text" 
              name="prcRegNo"
              className="w-full border border-black rounded px-4 py-3"
              value={formData.prcRegNo}
              onChange={handleInputChange}
            />
          </div>

          {/* Print Name */}
          <div>
            <label className="block mb-2 font-semibold">Print Name</label>
            <input 
              type="text" 
              name="printName"
              className="w-full border border-black rounded px-4 py-3"
              value={formData.printName}
              onChange={handleInputChange}
            />
          </div>

          {/* Address */}
          <div>
            <label className="block mb-2 font-semibold">Address</label>
            <input 
              type="text" 
              name="address"
              className="w-full border border-black rounded px-4 py-3"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>

          {/* PTR NO. */}
          <div>
            <label className="block mb-2 font-semibold">PTR NO.</label>
            <input 
              type="text" 
              name="ptrNo"
              className="w-full border border-black rounded px-4 py-3"
              value={formData.ptrNo}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Date Issued */}
          <div>
            <label className="block mb-2 font-semibold">Date Issued</label>
            <input 
              type="date" 
              name="dateIssued"
              className="w-full border border-black rounded px-4 py-3"
              value={formData.dateIssued}
              onChange={handleInputChange}
              placeholder="_ / _ / _"
            />
          </div>

          {/* Place Issued */}
          <div>
            <label className="block mb-2 font-semibold">Place Issued</label>
            <input 
              type="text" 
              name="placeIssued"
              className="w-full border border-black rounded px-4 py-3"
              value={formData.placeIssued}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeventhForm;