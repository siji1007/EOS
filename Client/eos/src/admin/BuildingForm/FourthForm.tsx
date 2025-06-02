const FourthForm = () => {
    return (
         <div className="rounded-lg w-full mx-auto">
      <h1 className="text-lg text-center mb-2">Progress Flow in</h1>
      
      {/* Progress Flow Section */}
      <div className="mb-8">
        <div className="grid grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-2">
            {/* Receiving and Receiving */}
            <div className="flex flex-row space-y-2">
              <section className="relative w-full mt-6 px-3">
                <label htmlFor="receivingTime" className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black">Receiving and Receiving Time</label>
                <input id="receivingTime" type="time" className="w-full border border-black rounded px-3 py-2 focus:outline-none" title="Receiving and Receiving Time" placeholder="Time" />
              </section>
              <section className="relative w-full mt-6 px-3">
                <label htmlFor="receivingDate" className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black">Receiving and Receiving Date</label>
                <input id="receivingDate" type="date" className="w-full border border-black rounded px-3 py-2 focus:outline-none" title="Receiving and Receiving Date" placeholder="Date" />
              </section>
            </div>
            {/* Land Use and Zoning */}
            <div className="flex flex-row space-y-2">
              <section className="relative w-full mt-6 px-3">
                <label htmlFor="landUseTime" className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black">Land Use and Zoning Time</label>
                <input id="landUseTime" type="time" className="w-full border border-black rounded px-3 py-2 focus:outline-none" title="Land Use and Zoning Time" placeholder="Time" />
              </section>
              <section className="relative w-full mt-6 px-3">
                <label htmlFor="landUseDate" className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black">Land Use and Zoning Date</label>
                <input id="landUseDate" type="date" className="w-full border border-black rounded px-3 py-2 focus:outline-none" title="Land Use and Zoning Date" placeholder="Date" />
              </section>
             </div>

             <div className="flex flex-row space-y-2">  {/* Geodetic (Line and Grade) */}
              <section className="relative w-full mt-6 px-3">
                <label htmlFor="geodeticTime" className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black">Geodetic (Line and Grade) Time</label>
                <input id="geodeticTime" type="time" className="w-full border border-black rounded px-3 py-2 focus:outline-none" title="Geodetic (Line and Grade) Time" placeholder="Time" />
              </section>
              <section className="relative w-full mt-6 px-3">
                <label htmlFor="geodeticDate" className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black">Geodetic (Line and Grade) Date</label>
                <input id="geodeticDate" type="date" className="w-full border border-black rounded px-3 py-2 focus:outline-none" title="Geodetic (Line and Grade) Date" placeholder="Date" />
              </section>
               </div>
            
            {/* Architectural */}
            <div className="flex flex-row space-y-2">
              <section className="relative w-full mt-6 px-3">
                <label htmlFor="architecturalTime" className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black">Architectural Time</label>
                <input id="architecturalTime" type="time" className="w-full border border-black rounded px-3 py-2 focus:outline-none" title="Architectural Time" placeholder="Time" />
              </section>
              <section className="relative w-full mt-6 px-3">
                <label htmlFor="architecturalDate" className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black">Architectural Date</label>
                <input id="architecturalDate" type="date" className="w-full border border-black rounded px-3 py-2 focus:outline-none" title="Architectural Date" placeholder="Date" />
              </section>
            </div>
            {/* Structural */}
            <div className="flex flex-row space-y-2">
              <section className="relative w-full mt-6 px-3">
                <label htmlFor="structuralTime" className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black">Structural Time</label>
                <input 
                  id="structuralTime"
                  type="time" 
                  className="w-full border border-black rounded px-3 py-2 focus:outline-none"
                  title="Structural Time"
                  placeholder="Time"
                />
              </section>
              <section className="relative w-full mt-6 px-3">
                <label htmlFor="structuralDate" className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black">Structural Date</label>
                <input 
                  id="structuralDate"
                  type="date" 
                  className="w-full border border-black rounded px-3 py-2 focus:outline-none"
                  title="Structural Date"
                  placeholder="Date"
                />
              </section>               
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-2">
            {/* Sanitary */}
            <div className="flex flex-row space-y-2">
              <section className="relative w-full mt-6 px-3">
                <label htmlFor="sanitaryTime" className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black">Sanitary Time</label>
                <input id="sanitaryTime" type="time" className="w-full border border-black rounded px-3 py-2 focus:outline-none" title="Sanitary Time" placeholder="Time" />
              </section>
              <section className="relative w-full mt-6 px-3">
                <label htmlFor="sanitaryDate" className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black">Sanitary Date</label>
                <input id="sanitaryDate" type="date" className="w-full border border-black rounded px-3 py-2 focus:outline-none" title="Sanitary Date" placeholder="Date" />
              </section>
            </div>
            {/* Electrical */}
            <div className="flex flex-row space-y-2">
              <section className="relative w-full mt-6 px-3">
                <label htmlFor="electricalTime" className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black">Electrical Time</label>
                <input id="electricalTime" type="time" className="w-full border border-black rounded px-3 py-2 focus:outline-none" title="Electrical Time" placeholder="Time" />
              </section>
              <section className="relative w-full mt-6 px-3">
                <label htmlFor="electricalDate" className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black">Electrical Date</label>
                <input id="electricalDate" type="date" className="w-full border border-black rounded px-3 py-2 focus:outline-none" title="Electrical Date" placeholder="Date" />
              </section>
            </div>
            {/* Mechanical */}
            <div className="flex flex-row space-y-2">
              <section className="relative w-full mt-6 px-3">
                <label htmlFor="mechanicalTime" className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black">Mechanical Time</label>
                <input id="mechanicalTime" type="time" className="w-full border border-black rounded px-3 py-2 focus:outline-none" title="Mechanical Time" placeholder="Time" />
              </section>
              <section className="relative w-full mt-6 px-3">
                <label htmlFor="mechanicalDate" className="absolute -top-3 ml-3 bg-gray-100 px-2 text-sm text-black">Mechanical Date</label>
                <input id="mechanicalDate" type="date" className="w-full border border-black rounded px-3 py-2 focus:outline-none" title="Mechanical Date" placeholder="Date" />
              </section>
             </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default FourthForm;
