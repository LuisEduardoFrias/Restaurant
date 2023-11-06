import "./id_dual_ring.css";

interface ILdDualRingProps {
  show:boolean
}

export default function LdDualRing({show}: ILdDualRingProps) {
  return (
    <div className='conten'>
      {show ?? 
        <div className='ldDualRing'></div>
      
      }
    </div>
  );
}
