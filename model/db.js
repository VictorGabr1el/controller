import { Sequelize } from "sequelize";
import express from "express";
import { env } from "process";
// export const sequelize = new Sequelize(
//   "oxpzogsz",
//   "oxpzogsz",
//   "RMr0YWWYUetdJO6qspKGmezwG5rmNFgA",
//   {
//     host: "motty.db.elephantsql.com",
//     port: 5432,
//     dialect: "postgres",
//   }
// );

export const sequelize = new Sequelize(
  "postgres://socialdb:@*ndbfjd12@socialdb.postgres.database.azure.com:5432/postgres?sslmode=require"
);

try {
  await sequelize.authenticate();
  console.log("Connection successfully.");
} catch (error) {
  console.error("Não foi possivel realizar conexão db: ", error);
}
