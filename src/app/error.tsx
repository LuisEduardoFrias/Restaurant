"use client";

export default function Error() {
  return (
    <div className='error-container'>
      <div className='error-header'>
        <span className='error-icon'>
          <b>!</b>
        </span>
        <h1 className='error-h1'>Error</h1>
      </div>
      <p>Pagina no encontrada</p>
    </div>
  );
}
