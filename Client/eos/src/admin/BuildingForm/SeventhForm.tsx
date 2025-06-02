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
          <section className="relative w-full mt-6 px-3">
            <label htmlFor="prcRegNo" className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black font-semibold">PRC REG NO.</label>
            <input 
              id="prcRegNo"
              type="text" 
              name="prcRegNo"
              className="w-full border border-black rounded px-4 py-3 focus:outline-none"
              value={formData.prcRegNo}
              onChange={handleInputChange}
              placeholder="PRC REG NO."
              title="PRC REG NO."
            />
          </section>

          {/* Print Name */}
          <section className="relative w-full mt-6 px-3">
            <label htmlFor="printName" className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black font-semibold">Print Name</label>
            <input 
              id="printName"
              type="text" 
              name="printName"
              className="w-full border border-black rounded px-4 py-3 focus:outline-none"
              value={formData.printName}
              onChange={handleInputChange}
              placeholder="Print Name"
              title="Print Name"
            />
          </section>

          {/* Address */}
          <section className="relative w-full mt-6 px-3">
            <label htmlFor="address" className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black font-semibold">Address</label>
            <input 
              id="address"
              type="text" 
              name="address"
              className="w-full border border-black rounded px-4 py-3 focus:outline-none"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Address"
              title="Address"
            />
          </section>

          {/* PTR NO. */}
          <section className="relative w-full mt-6 px-3">
            <label htmlFor="ptrNo" className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black font-semibold">PTR NO.</label>
            <input 
              id="ptrNo"
              type="text" 
              name="ptrNo"
              className="w-full border border-black rounded px-4 py-3 focus:outline-none"
              value={formData.ptrNo}
              onChange={handleInputChange}
              placeholder="PTR NO."
              title="PTR NO."
            />
          </section>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Date Issued */}
          <section className="relative w-full mt-6 px-3">
            <label htmlFor="dateIssued" className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black font-semibold">Date Issued</label>
            <input 
              id="dateIssued"
              type="date" 
              name="dateIssued"
              className="w-full border border-black rounded px-4 py-3 focus:outline-none"
              value={formData.dateIssued}
              onChange={handleInputChange}
              placeholder="_ / _ / _"
              title="Date Issued"
            />
          </section>

          {/* Place Issued */}
          <section className="relative w-full mt-6 px-3">
            <label htmlFor="placeIssued" className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black font-semibold">Place Issued</label>
            <input 
              id="placeIssued"
              type="text" 
              name="placeIssued"
              className="w-full border border-black rounded px-4 py-3 focus:outline-none"
              value={formData.placeIssued}
              onChange={handleInputChange}
              placeholder="Place Issued"
              title="Place Issued"
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default SeventhForm;
