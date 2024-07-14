




export default function Rupee({width, height, color, effect}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" 
            width= {width ? width :"20"} height={height ? height :"20"} 
            strokeWidth="2" stroke="currentColor" fill="none" 
            strokeLinecap="round" strokeLinejoin="round"> 
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/> 
            <path d="M18 5h-11h3a4 4 0 0 1 0 8h-3l6 6" /> 
            <line x1="7" y1="9" x2="18" y2="9" /> 
        </svg>
    )
}