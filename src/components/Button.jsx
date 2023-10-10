/* eslint-disable react/prop-types */

export const Button = ({ handleClick }) => {
    return (
        <div>
            <button className="w-[180px] h-[50px] text-[20px] bg-blue-600 rounded-md text-white font-semibold hover:bg-blue-500" onClick={handleClick}>Siguiente Cita</button>
        </div>
    )
}
