import { DataTypes } from "sequelize";
import { sequelize } from "./db.js";
import { User } from "./User.js";

export const Post = sequelize.define("Posts", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  img_post: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  legend: {
    type: DataTypes.STRING,
    // type: DataTypes.STRING(1000),
  },
});

Post.belongsTo(User, {
  constraints: true,
  foreignKey: "userId",
});

User.hasMany(Post, {
  foreignKey: "userId",
});
