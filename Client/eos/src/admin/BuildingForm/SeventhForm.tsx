const SeventhForm = () => {
    return (
        <div className="bg-white rounded-lg p-6 w-full shadow-lg relative align-center mx-auto">
            
            <div className="grid grid-cols-2 gap-4">
            {/* Row 1 */}
            <div>
                <label className="block mb-1">Full Name:</label>
                <input type="text" className="w-full border rounded px-3 py-2" />
            </div>
            <div className="flex gap-4">
                <div className="flex-1">
                <label className="block mb-1">Tax No.</label>
                <input type="text" className="w-full border rounded px-3 py-2" />
                </div>
                <div className="flex-1">
                <label className="block mb-1">Date of application:</label>
                <input type="date" className="w-full border rounded px-3 py-2" />
                </div>
            </div>

            {/* Row 2 */}
            <div>
                <label className="block mb-1">Construction by Enterprise</label>
                <input type="text" className="w-full border rounded px-3 py-2" />
            </div>
            <div>
                <label className="block mb-1">Telephone No.</label>
                <input type="text" className="w-full border rounded px-3 py-2" />
            </div>

            {/* Row 3 */}
            <div className="col-span-2">
                <label className="block mb-1">Full Address</label>
                <input type="text" className="w-full border rounded px-3 py-2" />
            </div>

            {/* Row 4 */}
            <div>
                <label className="block mb-1">Location of construction</label>
                <input type="text" className="w-full border rounded px-3 py-2" />
            </div>
            <div>
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
            <div>
                <label className="block mb-1">Form of ownership</label>
                <input type="text" className="w-full border rounded px-3 py-2" />
            </div>
            <div>
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
            <div className="col-span-2">
                <label className="block mb-1">Main Economic/Kind of business</label>
                <input type="text" className="w-full border rounded px-3 py-2" />
            </div>
            </div>
            </div>
    );
}

export default SeventhForm;