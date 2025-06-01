const Track = () => {
    return (
        <div>
             <div style={{ width: '100%', height: '100vh' }}>
                <iframe
                    title="Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77565.09953391498!2d122.79272273364553!3d14.162077988969187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33964b5e490d6585%3A0x3295f3ec560d7d94!2sCamarines%20Norte%2C%20Bicol%20Region%2C%20Philippines!5e0!3m2!1sen!2sph!4v1696103229468!5m2!1sen!2sph"
                    className="w-full h-full rounded"
                    allowFullScreen=""
                    loading="lazy"
                    style={{ border: 0, width: '100%', height: '100%' }}
                />
            </div>
        </div>
    );
};

export default Track;
