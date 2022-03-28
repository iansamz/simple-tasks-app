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
        type: Sequelize.ENUM,
        values: ['MALE', 'FEMALE', 'OTHER']
      },
      registration: {
        type: Sequelize.ENUM,
        values: ['self', 'organisation']
      }
    });
  
    return Client;
  };
  