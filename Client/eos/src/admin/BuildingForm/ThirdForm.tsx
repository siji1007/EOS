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
    <div className="rounded-lg w-full shadow-lg relative align-center mx-auto mt-8">
      <h3 className="text-xl font-semibold mb-6 text-center">Assessed Fee</h3>

      <div className="grid grid-cols-5 gap-4 items-center">
        {rows.map((label, idx) => (
          <React.Fragment key={idx}>
            <label className="col-span-1">{label}</label>
            <input
              type="number"
              placeholder="₱"
              value={fees[idx]}
              onChange={(e) => handleFeeChange(idx, e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
            <input type="text" placeholder="Assessed By" className="w-full border rounded px-3 py-2" />
            <input type="number" placeholder="O.R. Number" className="w-full border rounded px-3 py-2" />
            <input type="date" placeholder="__/__" className="w-full border rounded px-3 py-2" />
          </React.Fragment>
        ))}

        {/* Total Row */}
        <div className="col-span-1 font-semibold">Total</div>
        <div className="col-span-4">
          <input 
          type="text" 
          value={`₱ ${total.toLocaleString(undefined, { minimumFractionDigits: 2 })}`}
          readOnly 
          className="w-1/8 border rounded px-3 py-2" />
        </div>
      </div>
    </div>
  );
};

export default ThirdForm;
