import "../../../assets/css/loadding.css";

const Loadding = () => {
    return (
        <div className="h-screen grid place-content-center">
            <div className="lds-spinner flex justify-between">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loadding;
