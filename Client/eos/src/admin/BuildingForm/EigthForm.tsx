const EighthForm = () => {
    return (
        <div className="bg-white rounded-lg p-6 w-full shadow-lg relative align-center mx-auto">
            
            <div className="gap-4">
                {/* Row 1 */}
                <div>
                    <label className="block my-3 font-semibold">Community Tax Certificate</label>
                    <input type="text" className="w-full border rounded px-3 py-2" />
                </div>

                {/* Row 2 */}
                <div>
                    <label className="block my-3 font-semibold">Date Issued</label>
                    <input type="date" className="w-full border rounded px-3 py-2" />
                </div>

                {/* Row 3 */}
                <div className="col-span-2">
                    <label className="block my-3 font-semibold">Placed Issued</label>
                    <input type="text" className="w-full border rounded px-3 py-2" />
                </div>
            </div>
        </div>
    );
}

export default EighthForm;