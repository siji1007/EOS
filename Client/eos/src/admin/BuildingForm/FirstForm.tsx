import { ImSection } from "react-icons/im";

const FirstForm = () => {
    return (
        <div className=" rounded-lgw-full relative align-center mx-auto">
            
            <div className="grid grid-cols-2 gap-4">
                {/* Row 1 */}
                <section className="relative w-full mt-6 px-3">
                    <label htmlFor="fullName" className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black" > Full Name </label>
                    <input type="text" id="fullName" className="w-full border border-black rounded px-3 py-2 focus:outline-none" placeholder="Full Name" title="Full Name" />
                </section>

                <div className="flex gap-4">
                    <section className="relative w-full mt-6 px-3">
                        <label htmlFor="taxNo" className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black"> Tax No. </label>
                        <input type="text" id="taxNo" className="w-full border border-black rounded px-3 py-2 focus:outline-none" placeholder="Tax No." title="Tax No." />
                    </section>
                    <section className="relative w-full mt-6 px-3">
                        <label htmlFor="dateOfApplication" className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black">Date of application</label>
                        <input type="date" id="dateOfApplication" className="w-full border border-black rounded px-3 py-2 focus:outline-none" placeholder="Date of application" title="Date of application" />
                    </section>
                </div>

                {/* Row 2 */}
                <section className="relative w-full mt-6 px-3">
                    <label htmlFor="constructionByEnterprise" className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black">Construction by Enterprise</label>
                    <input type="text" id="constructionByEnterprise" className="w-full border border-black rounded px-3 py-2 focus:outline-none" placeholder="Construction by Enterprise" title="Construction by Enterprise" />
                </section>

                {/* Row 3 */}
                <section className="relative w-full mt-6 px-3">
                    <label htmlFor="telephoneNo" className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black">Telephone No.</label>
                    <input type="text" id="telephoneNo" className="w-full border border-black rounded px-3 py-2 focus:outline-none" placeholder="Telephone No." title="Telephone No." />
                </section>

                {/* Row 4 */}
                <section className="relative w-full mt-6 px-3">
                    <label htmlFor="fullAddress" className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black">Full Address</label>
                    <input type="text" id="fullAddress" className="w-full border border-black rounded px-3 py-2 focus:outline-none" placeholder="Full Address" title="Full Address" />
                </section>

                <section className="relative w-full mt-6 px-3">
                    <label htmlFor="locationOfConstruction" className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black">Location of Construction</label>
                    <input type="text" id="locationOfConstruction" className="w-full border border-black rounded px-3 py-2 focus:outline-none" placeholder="Location of Construction" title="Location of Construction" />
                </section>

                <section className="relative w-full mt-6 px-3">
                    <label htmlFor="scopeOfWorks" className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black">Scope of works</label>
                    <select id="scopeOfWorks" className="w-full border border-black rounded px-3 py-2 focus:outline-none" title="Scope of works">
                        <option>Scope of works</option>
                        <option>Renovation</option>
                        <option>New Construction</option>
                    </select>
                </section>
                <section className="relative w-full mt-6 px-3">
                    <label htmlFor="occupancy" className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black">Occupancy</label>
                    <select id="occupancy" className="w-full border border-black rounded px-3 py-2 focus:outline-none" title="Occupancy">
                        <option>Occupancy</option>
                        <option>Residential</option>
                        <option>Commercial</option>
                    </select>
                </section>

                {/* Row 5 */}
                <section className="relative w-full mt-6 px-3">
                    <label htmlFor="formOfOwnership" className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black">Form of ownership</label>
                    <input type="text" id="formOfOwnership" className="w-full border border-black rounded px-3 py-2 focus:outline-none" placeholder="Form of ownership" title="Form of ownership" />
                </section>
                <section className="relative w-full mt-6 px-3">
                    <label htmlFor="numberOfUnit" className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black">Number of unit</label>
                    <input type="number" id="numberOfUnit" className="w-full border border-black rounded px-3 py-2 focus:outline-none" placeholder="Number of unit" title="Number of unit" />
                </section>
                <section className="relative w-full mt-6 px-3">
                    <label htmlFor="unitType" className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black">Unit Type</label>
                    <select id="unitType" className="w-full border border-black rounded px-3 py-2 focus:outline-none" title="Unit Type">
                        <option>Select</option>
                        <option>Block</option>
                        <option>Flat</option>
                    </select>
                </section>

                {/* Row 6 */}
                <section className="relative w-full mt-6 px-3">
                    <label htmlFor="mainEconomic" className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black">Main Economic/Kind of business</label>
                    <input type="text" id="mainEconomic" className="w-full border border-black rounded px-3 py-2 focus:outline-none" placeholder="Main Economic/Kind of business" title="Main Economic/Kind of business" />
                </section>
            </div>
        </div>
    );
}

export default FirstForm;
