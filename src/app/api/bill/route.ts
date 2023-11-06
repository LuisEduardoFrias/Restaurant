import { NextResponse } from "next/server";
import BillDA from "i/data_access";
import Bill from "m/bill";

export async function POST(request: any) {
  const { products, client, datetime, wasIfPaid } = await request.json();

  return NextResponse.json(
    await new BillDA().post(
      Reflect.construct(Bill, [products, client, datetime, wasIfPaid]),
    ),
  );
}

export async function PUT(request: any) {
  const { products, client, datetime, wasIfPaid, key } = await request.json();
  const obj = Reflect.construct(Bill, [products, client, datetime, wasIfPaid]);
  obj.key = key;

  return NextResponse.json(await new BillDA().put(obj));
}
