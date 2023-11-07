import { daj } from "daj";
import Catalog from "m/catalog";
import Category from "m/category";
import Plate from "m/plate";
import Product from "m/product";
import Bill from "m/bill";
import System from "m/system";

export default class Add {
  async postBill() {
    return await daj.postAsync(obj);
  }
  
  async postCatalog() {
   const add1 = new Catalog(
    [
      new Category(
        [
          new Plate(
            "https://www.diabetesfoodhub.org/system/user_files/Images/1837-diabetic-pecan-crusted-chicken-breast_JulAug20DF_clean-simple_061720.jpg",
            "plato 1",
            200.45,
          ),

          new Plate(
            "https://www.diabetesfoodhub.org/system/user_files/Images/1837-diabetic-pecan-crusted-chicken-breast_JulAug20DF_clean-simple_061720.jpg",
            "plato 2",
            180.95,
          ),
        ],

        "termino medio",
      ),

      new Category(
        [
          new Plate(
            "https://www.diabetesfoodhub.org/system/user_files/Images/1837-diabetic-pecan-crusted-chicken-breast_JulAug20DF_clean-simple_061720.jpg",
            "plato 1",
            200.45,
          ),

          new Plate(
            "https://www.diabetesfoodhub.org/system/user_files/Images/1837-diabetic-pecan-crusted-chicken-breast_JulAug20DF_clean-simple_061720.jpg",
            "plato 2",
            180.95,
          ),

          new Plate(
            "https://www.diabetesfoodhub.org/system/user_files/Images/1837-diabetic-pecan-crusted-chicken-breast_JulAug20DF_clean-simple_061720.jpg",
            "plato 3",
            180.95,
          ),
        ],
        "pescado",
      ),

      new Category(
        [
          new Plate(
            "https://www.diabetesfoodhub.org/system/user_files/Images/1837-diabetic-pecan-crusted-chicken-breast_JulAug20DF_clean-simple_061720.jpg",
            "plato 1",
            200.45,
          ),

          new Plate(
            "https://www.diabetesfoodhub.org/system/user_files/Images/1837-diabetic-pecan-crusted-chicken-breast_JulAug20DF_clean-simple_061720.jpg",
            "plato 2",
            180.95,
          ),

          new Plate(
            "https://www.diabetesfoodhub.org/system/user_files/Images/1837-diabetic-pecan-crusted-chicken-breast_JulAug20DF_clean-simple_061720.jpg",
            "plato 3",
            180.95,
          ),
        ],
        "ensaladas",
      ),
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
