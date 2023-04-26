import { DataTypes } from "sequelize";
import { sequelize } from "./db.js";
import { Post } from "./Post.js";
import { User } from "./User.js";

export const Comment = sequelize.define("Comment", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  content: {
    type: DataTypes.STRING,
    // type: DataTypes.STRING(100),
    allowNull: false,
  },
});

Post.hasMany(Comment, {
  foreignKey: "postId",
});

Comment.belongsTo(User, {
  constraints: true,
  foreignKey: "userId",
});
