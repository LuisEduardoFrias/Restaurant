import BillController from "ct/bill_controller.ts";
import Bill from "m/bill";
import Notification from "./notification";
import BackButton from "cp//back_button/back_button";

export default async function Bill() {
  const BC = new BillController();

  const { bill, error } = (await BC.getInvoiceWithoutPaying("mesa 001")) as {
    bill: Bill;
    error: string;
  };

  return (
    <>
      <BackButton classCss='back' />
      <h1>Facturacion</h1>
      <h2>{bill.client.name}</h2>

      <Notification show={!!error} text={error} />

      <div>
        <div>
          <label>producto</label>
          <label>precio</label>
        </div>

        <div>
          {!!bill &&
            bill.products.map((e, i) => (
              <div key={i}>
              { e?.img && <img
                  src={e.img}
                  alt='Imagen seleccionada'
                  width='100'
                  heigth='100'
                />}
                <label>{e.name}</label>
                <label>{e.price}</label>
              </div>
            ))}
          <div>
            <label>Total</label>
            <label>{bill.total}</label>
          </div>
        </div>
      </div>
    </>
  );
}
