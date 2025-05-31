const Home = () => {
    return(
        <>
            <div className="bg-linear-to-t from-[#213548] to-[#385981] w-full h-[90vh] flex flex-col items-baseline justify-center">
                <h1 className="text-white text-9xl p-24 "><span className="text-[#1C80D5]">Simplify</span> Your Permit Process with <span className="text-[#1C80D5] font-bold">EOS</span></h1>
                <div className="flex flex-row items-center justify-between w-full p-10">
                    <button className="text-white font-extralight bg-transparent border-5 rounded-[10vh] text-5xl mx-50 h-[10vh] w-[20vw] transition hover:bg-[#385981]">Login</button>
                    <img src="../src/assets/logo/logo.png" className="h-[30vh] aspect-auto"></img>
                </div>
                <h2 className="text-white text-3xl p-24"><span className="text-[#1C80D5] font-bold">Sign up </span>now or log in to manage your building applications — all in one secure and user-friendly platform.</h2>
            </div>
        </>

    )
}
export default Home;