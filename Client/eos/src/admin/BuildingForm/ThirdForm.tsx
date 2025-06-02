import React, {useState , useEffect} from 'react';

const ThirdForm = () => {
  const rows = [
    "Land Use and Zoning",
    "Line and Grade",
    "Building",
    "Plumbing",
    "Electrical",
    "Mechanical"
  ];

  // Fee values for ₱ column
  const [fees, setFees] = useState(Array(rows.length).fill(""));

  // Total amount
  const [total, setTotal] = useState(0);

  // Update total when fees change
  useEffect(() => {
    const sum = fees.reduce((acc, val) => acc + (parseFloat(val) || 0), 0);
    setTotal(sum);
  }, [fees]);

  // Handle fee input change
  const handleFeeChange = (index: number, value: string) => {
    const updatedFees = [...fees];
    updatedFees[index] = value;
    setFees(updatedFees);
  }

  return (
    <div className="rounded-lg w-full relative align-center mx-auto mt-8">
      <h3 className="text-xl font-semibold mb-6 text-center">Assessed Fee</h3>

      <div className="grid grid-cols-4 gap-4 items-center">
        {rows.map((label, idx) => (
          <React.Fragment key={idx}>
            <section className="relative w-full mt-6 px-3 col-span-1">
              <label htmlFor={`fee-${idx}`} className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black">{label}</label>
              <input
                id={`fee-${idx}`}
                type="number"
                placeholder="₱"
                value={fees[idx]}
                onChange={(e) => handleFeeChange(idx, e.target.value)}
                className="w-full border border-black rounded px-3 py-2 focus:outline-none"
                title={label}
              />
            </section>
            <section className="relative w-full mt-6 px-3 col-span-1">
              <label htmlFor={`assessedBy-${idx}`} className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black">Assessed By</label>
              <input id={`assessedBy-${idx}`} type="text" placeholder="Assessed By" className="w-full border border-black rounded px-3 py-2 focus:outline-none" title="Assessed By" />
            </section>
            <section className="relative w-full mt-6 px-3 col-span-1">
              <label htmlFor={`orNumber-${idx}`} className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black">O.R. Number</label>
              <input id={`orNumber-${idx}`} type="number" placeholder="O.R. Number" className="w-full border border-black rounded px-3 py-2 focus:outline-none" title="O.R. Number" />
            </section>
            <section className="relative w-full mt-6 px-3 col-span-1">
              <label htmlFor={`date-${idx}`} className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black">Date</label>
              <input id={`date-${idx}`} type="date" placeholder="__/__" className="w-full border border-black rounded px-3 py-2 focus:outline-none" title="Date" />
            </section>
          </React.Fragment>
        ))}

        {/* Total Row */}

        <div className="relative w-full mt-6 px-3 col-span-1">
            <label htmlFor="" className='absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black'>Total</label>
        
          <input 
          type="text" 
          value={`₱ ${total.toLocaleString(undefined, { minimumFractionDigits: 2 })}`}
          readOnly 
          className="w-full border border-black rounded px-3 py-2 focus:outline-none" />
        </div>
      </div>
    </div>
  );
};

export default ThirdForm;
