import BillController from "ct/bill_controller";
import { NextResponse } from "next/server";
import { BillDA } from "i/data_access";
import { SystemType } from "m/systemType";
import System from "m/system";
import Bill from "m/bill";

/* export async function POST(request: any) {
  const { products, client, datetime, wasIfPaid } = await request.json();

  return NextResponse.json(
    await new BillDA().post(
      Reflect.construct(Bill, [products, client, datetime, wasIfPaid]),
    ),
  );
}*/

export async function POST(request: any) {
  const { plate, client } = await request.json();

  const BC = new BillController();

  const { bill, error } = (await BC.getInvoiceWithoutPaying("mesa 001")) as {
    bill: Bill;
    error: string;
  };

  console.log(JSON.stringify(bill, null, 2));

  if (bill) {
    const _bill = Reflect.construct(Bill, [
      [...bill.products, plate],
      bill.client,
      false,
    ]);

    _bill.key = bill.key;

    return NextResponse.json(await new BillDA().put(_bill));
  } else {
    return NextResponse.json(
      await new BillDA().post(
        Reflect.construct(Bill, [
          [plate],
          new System(SystemType.client, client),
          false,
        ]),
      ),
    );
  }
}

export async function PUT(request: any) {
  const { products, client, datetime, wasIfPaid, key } = await request.json();
  const obj = Reflect.construct(Bill, [products, client, datetime, wasIfPaid]);
  obj.key = key;

  return NextResponse.json(await new BillDA().put(obj));
}
