const SecondForm = () => {
  return (
    <div className="bg-white rounded-lg p-6 w-full shadow-lg relative align-center mx-auto mt-8">
      <div className="grid grid-cols-3 gap-4">
        {/* Row 1 */}
        <div>
          <label className="block mb-1">Building</label>
          <input type="text" className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block mb-1">Cost</label>
          <input type="text" className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block mb-1">Number of storeys</label>
          <input type="text" className="w-full border rounded px-3 py-2" />
        </div>

        {/* Row 2 */}
        <div>
          <label className="block mb-1">Electrical</label>
          <input type="text" className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block mb-1">Equipment</label>
          <input type="text" className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block mb-1">Total Floor Area</label>
          <input type="text" className="w-full border rounded px-3 py-2" />
        </div>

        {/* Row 3 */}
        <div>
          <label className="block mb-1">Mechanical</label>
          <input type="text" className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block mb-1">Installed</label>
          <input type="text" className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block mb-1">
            Prop. Date of Const. <br />
            Expected Date of Completion
          </label>
          <input type="text" className="w-full border rounded px-3 py-2" />
        </div>

        {/* Row 4 */}
        <div>
          <label className="block mb-1">Plumbing</label>
          <input type="text" className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block mb-1">Others</label>
          <input type="text" className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block mb-1">Material of const</label>
          <select className="w-full border rounded px-3 py-2">
            <option>Select</option>
            <option>Concrete</option>
            <option>Steel</option>
            <option>Wood</option>
            <option>Brick</option>
          </select>
        </div>

        {/* Total Cost (full width) */}
        <div className="col-span-3">
          <label className="block mb-1">Total Cost</label>
          <input type="text" className="w-full border rounded px-3 py-2" />
        </div>
      </div>
    </div>
  );
};

export default SecondForm;
