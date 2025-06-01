

const FourthForm = () => {
    return (
         <div className="bg-white rounded-lg p-6 w-full shadow-lg mx-auto">
      <h1 className="text-2xl  text-center mb-8">Progress Flow in</h1>
      
      {/* Progress Flow Section */}
      <div className="mb-8">
        <div className="grid grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Receiving and Receiving */}
            <div>
              <h3 className="font-semibold mb-3">Receiving and Receiving</h3>
              <div className="flex gap-2">
                <input 
                  type="time" 
                  className="border rounded px-3 py-2 w-24"
                />
                <input 
                  type="date" 
                  className="flex-1 border rounded px-3 py-2"
                />
              </div>
            </div>

            {/* Land Use and Zoning */}
            <div>
              <h3 className="font-semibold mb-3">Land Use and Zoning</h3>
              <div className="flex gap-2">
                <input 
                  type="time" 
                  className="border rounded px-3 py-2 w-24"
                />
                <input 
                  type="date" 
                  className="flex-1 border rounded px-3 py-2"
                />
              </div>
            </div>

            {/* Geodetic (Line and Grade) */}
            <div>
              <h3 className="font-semibold mb-3">Geodetic (Line and Grade)</h3>
              <div className="flex gap-2">
                <input 
                  type="time" 
                  className="border rounded px-3 py-2 w-24"
                />
                <input 
                  type="date" 
                  className="flex-1 border rounded px-3 py-2"
                />
              </div>
            </div>

            {/* Architectural */}
            <div>
              <h3 className="font-semibold mb-3">Architectural</h3>
              <div className="flex gap-2">
                <input 
                  type="time" 
                  className="border rounded px-3 py-2 w-24"
                />
                <input 
                  type="date" 
                  className="flex-1 border rounded px-3 py-2"
                />
              </div>
            </div>

            {/* Structural */}
            <div>
              <h3 className="font-semibold mb-3">Structural</h3>
              <div className="flex gap-2">
                <input 
                  type="time" 
                  className="border rounded px-3 py-2 w-24"
                />
                <input 
                  type="date" 
                  className="flex-1 border rounded px-3 py-2"
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Sanitary */}
            <div>
              <h3 className="font-semibold mb-3">Sanitary</h3>
              <div className="flex gap-2">
                <input 
                  type="time" 
                  className="border rounded px-3 py-2 w-24"
                />
                <input 
                  type="date" 
                  className="flex-1 border rounded px-3 py-2"
                />
              </div>
            </div>

            {/* Electrical */}
            <div>
              <h3 className="font-semibold mb-3">Electrical</h3>
              <div className="flex gap-2">
                <input 
                  type="time" 
                  className="border rounded px-3 py-2 w-24"
                />
                <input 
                  type="date" 
                  className="flex-1 border rounded px-3 py-2"
                />
              </div>
            </div>

            {/* Mechanical */}
            <div>
              <h3 className="font-semibold mb-3">Mechanical</h3>
              <div className="flex gap-2">
                <input 
                  type="time" 
                  className="border rounded px-3 py-2 w-24"
                />
                <input 
                  type="date" 
                  className="flex-1 border rounded px-3 py-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default FourthForm;