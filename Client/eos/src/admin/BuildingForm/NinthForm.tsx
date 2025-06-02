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
        <div className="rounded-lg w-full mx-auto">
          <h1 className="text-2xl text-center mb-12">To be accomplished by lot owner</h1>
      
          <div className="space-y-8">
            {/* OCT / TCT NO. */}
            <section className="relative w-full mt-6 px-3 flex items-center gap-8">
              <label htmlFor="octTctNo" className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black font-semibold">OCT / TCT NO.</label>
              <input 
                id="octTctNo"
                type="text" 
                name="octTctNo"
                className="flex-1 border border-black rounded py-2 focus:outline-none"
                value={formData.octTctNo}
                onChange={handleInputChange}
                placeholder="OCT / TCT NO."
                title="OCT / TCT NO."
              />
            </section>

        {/* Print Name of LT Owner */}
            <section className="relative w-full mt-6 px-3 flex items-center gap-8">
              <label htmlFor="printNameLtOwner" className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black font-semibold">Print Name of LT Owner</label>
              <input 
                id="printNameLtOwner"
                type="text" 
                name="printNameLtOwner"
                  className="flex-1 border border-black rounded py-2 focus:outline-none"
                value={formData.printNameLtOwner}
                onChange={handleInputChange}
                placeholder="Print Name of LT Owner"
                title="Print Name of LT Owner"
              />
            </section>

        {/* Address */}
            <section className="relative w-full mt-6 px-3 flex items-center gap-8">
              <label htmlFor="address" className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black font-semibold">Address</label>
              <input 
                id="address"
                type="text" 
                name="address"
                  className="flex-1 border border-black rounded py-2 focus:outline-none"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Address"
                title="Address"
              />
            </section>

        {/* TIN */}
            <section className="relative w-full mt-6 px-3 flex items-center gap-8">
              <label htmlFor="tin" className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black font-semibold">TIN</label>
              <input 
                id="tin"
                type="text" 
                name="tin"
                   className="flex-1 border border-black rounded py-2 focus:outline-none"
                value={formData.tin}
                onChange={handleInputChange}
                placeholder="TIN"
                title="TIN"
              />
            </section>

        {/* Tax Declaration */}
            <section className="relative w-full mt-6 px-3 flex items-center gap-8">
              <label htmlFor="taxDeclaration" className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black font-semibold">Tax Declaration</label>
              <input 
                id="taxDeclaration"
                type="text" 
                name="taxDeclaration"
                  className="flex-1 border border-black rounded py-2 focus:outline-none"
                value={formData.taxDeclaration}
                onChange={handleInputChange}
                placeholder="Tax Declaration"
                title="Tax Declaration"
              />
            </section>

        {/* Community Tax Certificate */}
            <section className="relative w-full mt-6 px-3 flex items-center gap-8">
              <label htmlFor="communityTaxCertificate" className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black font-semibold">Community Tax Certificate</label>
              <input 
                id="communityTaxCertificate"
                type="text" 
                name="communityTaxCertificate"
                  className="flex-1 border border-black rounded py-2 focus:outline-none"
                value={formData.communityTaxCertificate}
                onChange={handleInputChange}
                placeholder="Community Tax Certificate"
                title="Community Tax Certificate"
              />
            </section>
      </div>
    </div>
    );
}

export default NinthForm;
