import { daj } from "daj";
import Catalog from "m/catalog";
import Category from "m/category";
import Plate from "m/plate";
import Product from "m/product";
import Bill from "m/bill";
import System from "m/system";
import { SystemType } from "m/systemType";

export default class Add {
  async postBill() {
    const plate1 = new Plate(
      "https://www.diabetesfoodhub.org/system/user_files/Images/1837-diabetic-pecan-crusted-chicken-breast_JulAug20DF_clean-simple_061720.jpg",
      "plato 1",
      200.45,
    );
    plate1.increaseScore();
    plate1.increaseScore();

    const plate2 = new Plate(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0dApJ5zMUcqKPUaatGGg7MtEHvmNfeLiqFw&usqp=CAU",
      "plato 2",
      180.95,
    );
    plate2.increaseScore();
    plate2.increaseScore();
    plate2.increaseScore();
    plate2.increaseScore();

    const product1 = new Product(
      "https://www.diabetesfoodhub.org/system/user_files/Images/1837-diabetic-pecan-crusted-chicken-breast_JulAug20DF_clean-simple_061720.jpg",
      "product 1",
      200.45,
    );

    const bill1 = new Bill(
      [plate1, plate2, product1],
      new System(SystemType.client, "mesa 001"),
      false,
    );

    return await daj.postAsync(bill1);
  }

  async postCatalog() {
    const plate1 = new Plate(
      "https://www.diabetesfoodhub.org/system/user_files/Images/1837-diabetic-pecan-crusted-chicken-breast_JulAug20DF_clean-simple_061720.jpg",
      "plato 1",
      200.45,
    );
    plate1.increaseScore();
    plate1.increaseScore();

    const plate2 = new Plate(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0dApJ5zMUcqKPUaatGGg7MtEHvmNfeLiqFw&usqp=CAU",
      "plato 2",
      180.95,
    );
    plate2.increaseScore();
    plate2.increaseScore();
    plate2.increaseScore();
    plate2.increaseScore();

    const plate3 = new Plate(
      "https://www.healthifyme.com/blog/wp-content/uploads/2021/10/All-About-The-Right-Food-Plate-Method.jpg",
      "plato 3",
      200.45,
    );
    plate3.increaseScore();
    plate3.increaseScore();
    plate3.increaseScore();

    const plate4 = new Plate(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbS34qmXPdZzDqtWTwe_Kl1lW2LBpqqzG84A&usqp=CAU",
      "plato 4",
      180.95,
    );
    plate4.increaseScore();
    plate4.increaseScore();
    plate4.increaseScore();
    plate4.increaseScore();
    plate4.increaseScore();
    plate4.increaseScore();

    const plate5 = new Plate(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7z02n6-73ujRZsvYShuubJvRHrfhT2t0XBg&usqp=CAU",
      "plato 5",
      180.95,
    );
    plate5.increaseScore();
    plate5.increaseScore();

    const plate6 = new Plate(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRL-ZX-RFuOiop28AcCvZIzSqwbFiAex5szA&usqp=CAU",
      "plato 6",
      200.45,
    );
    plate6.increaseScore();
    plate6.increaseScore();
    plate6.increaseScore();

    const plate7 = new Plate(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbXRrfvVUaRv_GW-Gs7nAHmyrIPecOOB13FQ&usqp=CAU",
      "plato 7",
      180.95,
    );
    plate7.increaseScore();
    plate7.increaseScore();
    plate7.increaseScore();
    plate7.increaseScore();
    plate7.increaseScore();

    const plate8 = new Plate(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCY94moXK0Rh-NcLtPKunZng_e6Ap9Jlg_rw&usqp=CAU",
      "plato 8",
      180.95,
    );
    plate8.increaseScore();
    plate8.increaseScore();
    plate8.increaseScore();
    plate8.increaseScore();
    plate8.increaseScore();
    plate8.increaseScore();
    plate8.increaseScore();
    plate8.increaseScore();

    const product1 = new Product(
      "https://www.diabetesfoodhub.org/system/user_files/Images/1837-diabetic-pecan-crusted-chicken-breast_JulAug20DF_clean-simple_061720.jpg",
      "product 1",
      200.45,
    );
    const product2 = new Product(
      "https://www.diabetesfoodhub.org/system/user_files/Images/1837-diabetic-pecan-crusted-chicken-breast_JulAug20DF_clean-simple_061720.jpg",
      "product 2",
      200.45,
    );
    const product3 = new Product(
      "https://www.diabetesfoodhub.org/system/user_files/Images/1837-diabetic-pecan-crusted-chicken-breast_JulAug20DF_clean-simple_061720.jpg",
      "product 3",
      200.45,
    );
    const product4 = new Product(
      "https://www.diabetesfoodhub.org/system/user_files/Images/1837-diabetic-pecan-crusted-chicken-breast_JulAug20DF_clean-simple_061720.jpg",
      "product 4",
      200.45,
    );

    const add1 = new Catalog(
      [
        new Category(
          [plate1, plate2, product3, product4],

          "termino medio",
        ),

        new Category([plate3, plate4, plate5, product2], "pescado"),

        new Category([plate6, plate7, plate8, product1], "ensaladas"),
      ],

      "Acompañamientos",

      "https://www.diabetesfoodhub.org/system/user_files/Images/1837-diabetic-pecan-crusted-chicken-breast_JulAug20DF_clean-simple_061720.jpg",
    );
    const add2 = new Catalog(
      [],
      "Bebidas",
      "https://www.diabetesfoodhub.org/system/user_files/Images/1837-diabetic-pecan-crusted-chicken-breast_JulAug20DF_clean-simple_061720.jpg",
    );
    const add3 = new Catalog(
      [],
      "Entradas",
      "https://www.diabetesfoodhub.org/system/user_files/Images/1837-diabetic-pecan-crusted-chicken-breast_JulAug20DF_clean-simple_061720.jpg",
    );
    const add4 = new Catalog(
      [],
      "Platos principales",
      "https://www.diabetesfoodhub.org/system/user_files/Images/1837-diabetic-pecan-crusted-chicken-breast_JulAug20DF_clean-simple_061720.jpg",
    );
    const add5 = new Catalog(
      [],
      "Postre",
      "https://www.diabetesfoodhub.org/system/user_files/Images/1837-diabetic-pecan-crusted-chicken-breast_JulAug20DF_clean-simple_061720.jpg",
    );

    await daj.postAsync(add1);
    await daj.postAsync(add2);
    await daj.postAsync(add3);
    await daj.postAsync(add4);
    await daj.postAsync(add5);
  }

  async postSystem() {
    return await daj.postAsync(obj);
  }
}
