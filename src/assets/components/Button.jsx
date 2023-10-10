/* eslint-disable react/prop-types */

export const Button = ({ handleClick }) => {
    return (
        <div>
            <button className="bg-slate-600" onClick={handleClick}>Siguiente Cita</button>
        </div>
    )
}
