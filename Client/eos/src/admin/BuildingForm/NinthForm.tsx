import {useState} from 'react';

const NinthForm = () => {
    const [formData, setFormData] = useState({
    octTctNo: '',
    printNameLtOwner: '',
    address: '',
    tin: '',
    taxDeclaration: '',
    communityTaxCertificate: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

    return (
        <div className="rounded-lg w-full shadow-lg mx-auto">
      <h1 className="text-2xl text-center mb-12">To be accomplished by lot owner</h1>
      
      <div className="space-y-8">
        {/* OCT / TCT NO. */}
        <div className="flex items-center gap-8">
          <label className="font-semibold w-48">OCT / TCT NO.</label>
          <input 
            type="text" 
            name="octTctNo"
            className="flex-1 border border-black rounded px-4 py-3"
            value={formData.octTctNo}
            onChange={handleInputChange}
          />
        </div>

        {/* Print Name of LT Owner */}
        <div className="flex items-center gap-8">
          <label className="font-semibold w-48">Print Name of LT Owner</label>
          <input 
            type="text" 
            name="printNameLtOwner"
            className="flex-1 border border-black rounded px-4 py-3"
            value={formData.printNameLtOwner}
            onChange={handleInputChange}
          />
        </div>

        {/* Address */}
        <div className="flex items-center gap-8">
          <label className="font-semibold w-48">Address</label>
          <input 
            type="text" 
            name="address"
            className="flex-1 border border-black rounded px-4 py-3"
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>

        {/* TIN */}
        <div className="flex items-center gap-8">
          <label className="font-semibold w-48">TIN</label>
          <input 
            type="text" 
            name="tin"
            className="flex-1 border border-black rounded px-4 py-3"
            value={formData.tin}
            onChange={handleInputChange}
          />
        </div>

        {/* Tax Declaration */}
        <div className="flex items-center gap-8">
          <label className="font-semibold w-48">Tax Declaration</label>
          <input 
            type="text" 
            name="taxDeclaration"
            className="flex-1 border border-black rounded px-4 py-3"
            value={formData.taxDeclaration}
            onChange={handleInputChange}
          />
        </div>

        {/* Community Tax Certificate */}
        <div className="flex items-center gap-8">
          <label className="font-semibold w-48">Community Tax Certificate</label>
          <input 
            type="text" 
            name="communityTaxCertificate"
            className="flex-1 border border-black rounded px-4 py-3"
            value={formData.communityTaxCertificate}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
    );
}

export default NinthForm;