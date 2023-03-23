const Homepage = () => {
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    {/* <img
                        src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                        className="max-w-sm rounded-lg shadow-2xl"
                        alt="img"
                    /> */}
                    <img
                        src="https://img.freepik.com/free-vector/hand-drawn-flat-design-people-waving-illustration_52683-79273.jpg?w=1380&t=st=1679467889~exp=1679468489~hmac=1622872de484770f7095e0975550cc144194f091380cfd0d59b924dad7748aa0"
                        className="md:max-w-lg lg:max-w-lg sm:max-w-sm  rounded-lg shadow-2xl"
                        alt="img"
                    />

                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Homepage;
