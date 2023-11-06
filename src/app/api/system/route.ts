import { NextResponse } from "next/server";
import { SystemDA } from "i/data_access";
import System from "m/system";

export async function POST(request: any) {
  const { systemType, name } = await request.json();

  return NextResponse.json(
    await new SystemDA().post(Reflect.construct(System, [systemType, name])),
  );
}

export async function PUT(request: any) {
  const { systemType, name, key } = await request.json();
  const obj = Reflect.construct(System, [systemType, name]);
  obj.key = key;
  return NextResponse.json(await new SystemDA().put(obj));
}
