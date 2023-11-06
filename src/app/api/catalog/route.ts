import { NextResponse } from "next/server";
import CatalogDA from "i/data_access";
import Catalog from "m/catalog";

export async function POST(request: any) {
  const { img, name, category } = await request.json();

  return NextResponse.json(
    await new CatalogDA().post(
      Reflect.construct(Catalog, [img, name, category]),
    ),
  );
}

export async function PUT(request: any) {
  const { img, name, category, key } = await request.json();

  const obj = Reflect.construct(Catalog, [img, name, category]);

  obj.key = key;

  return NextResponse.json(await new CatalogDA().put(obj));
}
