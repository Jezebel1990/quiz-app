type Props = {
    text: string;
    onClick: () => void;
};

const Button = ({ text, onClick}: Props) => {
 return (
 <button
  className='bg-[#46178F] hover:bg-red-600 select-none font-bold h-[45px] min-w-[120px] rounded-[10px] text-white'
  onClick={onClick}
 >
    {text}
 </button>
 );
};
export default Button;