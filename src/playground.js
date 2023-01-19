import { Op } from "sequelize";

import "./database";

import Customer from "./app/models/Customer";

class Playground {
  static async play() {
    // const customer = await Customer.findByPk(1);

    // const customer = await Customer.findOne({
    //   attributes: { exclude: ["status"] },
    // });

    // const customer = await Customer.create({
    //   name: "Apple",
    //   email: "apple.com.br",
    //   status: "ACTIVE"
    // });

    // console.log(JSON.stringify(customer, null, 2));

    // const customer = await Customer.findByPk(3);
    // console.log("Antes: ", JSON.stringify(customer, null, 2));

    // const newCustomer = await customer.update({ status: "ACTIVE" });
    // console.log("Depois: ", JSON.stringify(newCustomer, null, 2));

    // const customer = await Customer.findByPk(3);

    // customer.destroy();

    const customers = await Customer.findAll({
      where: {
        [Op.or]: {
          status: {
            [Op.in]: ["ACTIVE", "ARCHIVED"],
          },
          name: {
            [Op.like]: "Reginaldo%",
          },
        },
        createdAt: {
          [Op.between]: [new Date(2021, 12, 20), new Date(2022, 12, 31)],
        },
      },
    });

    console.log(JSON.stringify(customers, null, 2));
  }
}

Playground.play();
