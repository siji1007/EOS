import { ImSection } from "react-icons/im";

const FirstForm = () => {
    return (
        <div className=" rounded-lgw-full relative align-center mx-auto">
            
            <div className="grid grid-cols-2 gap-4">
                {/* Row 1 */}
                <section className="relative w-full mt-6 px-3">
                    <label htmlFor="fullName" className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black" > Full Name </label>
                    <input type="text" id="fullName" className="w-full border border-black rounded px-3 py-2 focus:outline-none" placeholder="" />
                </section>



         <div className="flex gap-4">
            <section className="relative w-full mt-6 px-3">
                <label className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black"> Tax No. </label>
                <input type="text" className="w-full border border-black rounded px-3 py-2 focus:outline-none" />
            </section>

            <section className="flex-1 ">
                <label className="block mb-1 ml-1 text-sm">Date of application:</label>
                <input type="date" className="w-full border border-black rounded px-3 py-2 focus:outline-none" />
            </section>
            </div>


    
        {/* Row 1 */}
            <section className="relative w-full mt-6 px-3">
                <label className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black">
                    Construction by Enterprise
                </label>
                <input
                    type="text"
                    className="w-full border border-black rounded px-3 py-2 focus:outline-none"
                />
            </section>

            {/* Row 2 */}
            <section className="relative w-full mt-6 px-3">
                <label className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black">Telephone No.</label>
                <input
                    type="text"
                    className="w-full border border-black rounded px-3 py-2 focus:outline-none"
                />
            </section>

            {/* Row 3 */}
            <div className="relative w-full mt-6 px-3">
                <label className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black">Full Address</label>
                <input
                    type="text"
                    className="w-full border border-black rounded px-3 py-2 focus:outline-none"
                />
            </div>

            {/* Row 4 */}
            <div className="relative w-full mt-6 px-3">
                <label className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black">Location of Construction</label>
                <input
                    type="text"
                    className="w-full border border-black rounded px-3 py-2 focus:outline-none"
                />
            </div>

                <div className="px-3">
                    <label className="block mb-1">Select below:</label>
                    <div className="flex gap-2">
                        <select className="w-full border rounded px-3 py-2">
                            <option>Scope of works</option>
                            <option>Renovation</option>
                            <option>New Construction</option>
                        </select>
                        <select className="w-full border rounded px-3 py-2">
                            <option>Occupancy</option>
                            <option>Residential</option>
                            <option>Commercial</option>
                        </select>
                    </div>
                </div>

                {/* Row 5 */}
                <div className="relative w-full mt-6 px-3">
                    <label className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black">Form of ownership</label>
                    <input type="text" className="w-full border rounded px-3 py-2" />
                </div>
                <div className="px-3">
                    <label className="block mb-1">Number of unit</label>
                    <div className="flex gap-2">
                    <select className="border rounded px-3 py-2">
                        <option>Select</option>
                        <option>Block</option>
                        <option>Flat</option>
                    </select>
                    <input type="number" className="w-full border rounded px-3 py-2" />
                    </div>
                </div>

                {/* Row 6 */}
                <div className="relative w-full mt-6 px-3">
                    <label className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black">Main Economic/Kind of business</label>
                    <input type="text" className="w-full border rounded px-3 py-2" />
                </div>
            </div>
        </div>
    );
}

export default FirstForm;