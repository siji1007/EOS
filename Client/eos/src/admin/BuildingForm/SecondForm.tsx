const SecondForm = () => {
  return (
    <div className=" rounded-lg w-full relative align-center mx-auto mt-8">
      <div className="grid grid-cols-3 gap-4">
        {/* Row 1 */}
        <section className="relative w-full mt-6 px-3">
          <label className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black">Building</label>
          <input type="text" className="w-full border border-black rounded px-3 py-2 focus:outline-none" />
        </section>

        <section className="relative w-full mt-6 px-3">
          <label className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black">Cost</label>
          <input type="text" className="w-full border border-black rounded px-3 py-2 focus:outline-none" />
        </section>

        <section className="relative w-full mt-6 px-3">
          <label className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black">Number of storeys</label>
          <input type="text" className="w-full border border-black rounded px-3 py-2 focus:outline-none" />
        </section>

        {/* Row 2 */}
        <section className="relative w-full mt-6 px-3">
          <label className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black">Electrical</label>
          <input type="text" className="w-full border border-black rounded px-3 py-2 focus:outline-none" />
        </section>
        <section className="relative w-full mt-6 px-3">
          <label className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black">Equipment</label>
          <input type="text" className="w-full border border-black rounded px-3 py-2 focus:outline-none" />
        </section>
        <section className="relative w-full mt-6 px-3">
          <label className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black">Total Floor Area</label>
          <input type="text" className="w-full border border-black rounded px-3 py-2 focus:outline-none" />
        </section>

        {/* Row 3 */}
        <section className="relative w-full mt-6 px-3">
          <label className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black">Mechanical</label>
          <input type="text" className="w-full border border-black rounded px-3 py-2 focus:outline-none" />
        </section>
        <section className="relative w-full mt-6 px-3">
          <label className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black">Installed</label>
          <input type="text" className="w-full border border-black rounded px-3 py-2 focus:outline-none" />
        </section>
        <section className="relative w-full mt-6 px-3">
          <label className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black">Prop. Date of Const. Expected Date of Completion</label>
          <input type="date" className="w-full border border-black rounded px-3 py-2 focus:outline-none" />
        </section>

        {/* Row 4 */}
        <section className="relative w-full mt-6 px-3">
          <label className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black">Plumbing</label>
          <input type="text" className="w-full border border-black rounded px-3 py-2 focus:outline-none" />
        </section>
        <section className="relative w-full mt-6 px-3">
          <label className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black">Others</label>
          <input type="text" className="w-full border border-black rounded px-3 py-2 focus:outline-none" />
        </section>
        <section className="relative w-full mt-6 px-3">
          <label className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black">Material of const</label>
          <select className="w-full border border-black rounded px-3 py-2 focus:outline-none">
            <option>Select</option>
            <option>Concrete</option>
            <option>Steel</option>
            <option>Wood</option>
            <option>Brick</option>
          </select>
        </section>

        {/* Total Cost (full width) */}
        <section className="relative w-full mt-6 px-3 col-span-3">
          <label className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black">Total Cost</label>
          <input type="text" className="w-full border border-black rounded px-3 py-2 focus:outline-none" />
        </section>
      </div>
    </div>
  );
};

export default SecondForm;
