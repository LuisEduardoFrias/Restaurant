import { NextResponse } from "next/server";
import BillController from "ct/bill_controller";
import { BillDA } from "i/data_access.ts";
import Bill from "m/bill";
import System from "./system";
import SystemType from "./systemType";

export async function POST(request: any) {
  const { plate, client } = await request.json();

  console.log("‐------------------------------");
  console.log(client);
  console.log(JSON.stringify(plate));

  /* const { bill, error } = (await new BillController().getInvoiceWithoutPaying(
    client,
  )) as {
    bill: Bill;
    error: string;
  };*/

  console.log(JSON.stringify(bill));
  return { error: null, data: "success" };
  /*
  if (bill) {
    bill.products = [...bill.products, ...plate];
    return NextResponse.json(await new BillDA().put(bill));
  } else {
    return NextResponse.json(
      await new BillDA().post(
        Reflect.construct(Bill, [
          plate,
          new System(SystemType.client, client),
          false,
        ]),
      ),
    );
  }
  */
}

export async function PUT(request: any) {
  const { products, client, datetime, wasIfPaid, key } = await request.json();
  const obj = Reflect.construct(Bill, [products, client, datetime, wasIfPaid]);
  obj.key = key;

  return NextResponse.json(await new BillDA().put(obj));
}
