import "./id_dual_ring.css";

export default function LdDualRing({ show }: boolean) {
  return (
    <div className='conten'>{show && <div className='ldDualRing'></div>}</div>
  );
}
