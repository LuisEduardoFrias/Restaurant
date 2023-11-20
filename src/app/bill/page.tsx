import BillController from "ct/bill_controller";
import Notification from "./notification";
import Products from "./products";
import Bill from "m/bill";
import "./products.css";

export default async function Bills() {
  const BC = new BillController();

  const { bill, error } = (await BC.getInvoiceWithoutPaying("mesa 001")) as {
    bill: Bill;
    error: string;
  };

  return (
    <>
      <h1 className='bill-title'>Facturacion</h1>

      <Notification show={!!error} text={error} />

      <div className='bill-container'>
        <div className='bill-header'>
          <label className='bill-col1'>Productos</label>
          <label className='bill-col2'>Precios</label>
        </div>
        <Products data={bill} />
        <br />
        <div className='bill-fooder'>
          <button className='bill-btn none-select none-focus'>
            Realizar pedidos
          </button>
          <button disabled className='bill-btn none-select none-focus'>
            Realizar pago
          </button>
        </div>
      </div>
      <br />
      <br />
    </>
  );
}
