import { ReactNode, useState } from "react";

const ButtonFloor = ({children, floor}:{children:ReactNode, floor:number}) => {

    const [isVisible, setIsVisible] = useState(true)
    
    const handleToggle = () => {
        setIsVisible((prev) => !prev)
    }
    
    return (
        <div style={{ padding: "10px", fontFamily: "Arial, sans-serif" }}>
            <button
                onClick={handleToggle}
                style={{
                    // padding: "10px 20px",
                    // fontSize: "16px",
                    // backgroundColor: "#007BFF",
                    // color: "white",
                    // border: "none",
                    // borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                {isVisible ? <h1 className="text-2xl font-bold">Tầng {floor}</h1> : <h1 className="text-2xl font-bold">Tầng {floor}</h1>}
            </button>
            {isVisible && (
                <div
                    style={{
                        marginTop: "10px",
                        padding: "10px",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        backgroundColor: "#f9f9f9",
                    }}
                >
                    {children}
                </div>
            )}
        </div>
    )
}

export default ButtonFloor;