module.exports = (sequelize, Sequelize) => {
    const Client = sequelize.define("client", {
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      gender: {
        type: DataTypes.ENUM,
        values: ['MALE', 'FEMALE', 'OTHER']
      },
      registration: {
        type: DataTypes.ENUM,
        values: ['self', 'organisation']
      }
    });
  
    return Client;
  };
  