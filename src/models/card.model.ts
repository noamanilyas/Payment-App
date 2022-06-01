export const CardModel = (sequelize, Sequelize) => {
  const Card = sequelize.define("Card", {
    cardNumber: {
      type: Sequelize.STRING(64),
      allowNull: false,
    },
    cvv: {
      type: Sequelize.STRING(32),
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING(64),
      allowNull: false,
    },
    expiryMonth: {
      type: Sequelize.STRING(2),
      allowNull: false,
    },
    expiryYear: {
      type: Sequelize.STRING(4),
      allowNull: false,
    },
    exp: {
      type: Sequelize.STRING(7),
      allowNull: false,
    },
  });

  return Card;
};
