const EighthForm = () => {
    return (
        <div className="rounded-lg w-full relative align-center mx-auto">
            
            <div className="gap-4">
                {/* Row 1 */}
                <section className="relative w-full mt-6 px-3">
                    <label htmlFor="communityTaxCertificate" className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black font-semibold">Community Tax Certificate</label>
                    <input type="text" id="communityTaxCertificate" className="w-full border border-black rounded px-3 py-2 focus:outline-none" placeholder="Community Tax Certificate" title="Community Tax Certificate" />
                </section>

                {/* Row 2 */}
                <section className="relative w-full mt-6 px-3">
                    <label htmlFor="dateIssued" className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black font-semibold">Date Issued</label>
                    <input type="date" id="dateIssued" className="w-full border border-black rounded px-3 py-2 focus:outline-none" placeholder="Date Issued" title="Date Issued" />
                </section>

                {/* Row 3 */}
                <section className="relative w-full mt-6 px-3 col-span-2">
                    <label htmlFor="placeIssued" className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black font-semibold">Place Issued</label>
                    <input type="text" id="placeIssued" className="w-full border border-black rounded px-3 py-2 focus:outline-none" placeholder="Place Issued" title="Place Issued" />
                </section>
            </div>
        </div>
    );
}

export default EighthForm;
