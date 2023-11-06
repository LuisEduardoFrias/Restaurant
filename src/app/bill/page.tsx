import BillController from "ct/bill_controller.ts";
import Bill from "m/bill";
import Notification from "./notification";
import BackButton from "cp//back_button/back_button";

export default async function Bill() {
  const BC = new BillController();

  const { bill, error } = (await BC.getInvoiceWithoutPaying("hhh")) as {
    bill: Bill;
    error: string;
  };

  if (error) {
  }

  let total: number = 0.0;

  (() => {
    bill &&
      bill.products.map(e => {
        total += e.price;
      });
  })();

  return (
    <>
      <BackButton classCss='back' />
      <h1>Facturacion</h1>

      <Notification show={!!!error} text={error} />

      <div>
        <div>
          <label>producto</label>
          <label>precio</label>
        </div>

        <div>
          {bill ??
            bill?.map((e, i) => (
              <div>
                <label>{e.product}</label>
                <label>{e.price}</label>
              </div>
            ))}
          <div>
            <label>Total</label>
            <label>{total}</label>
          </div>
        </div>
      </div>
    </>
  );
}
