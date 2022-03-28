module.exports = (sequelize, Sequelize) => {
    const Task = sequelize.define("task", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        location: {
            allowNull: true,
            type: Sequelize.STRING
        },
        location: {
            allowNull: true,
            type: Sequelize.STRING
        },
        comments: {
            allowNull: true,
            type: Sequelize.STRING
        },
        mpesa: {
            allowNull: true,
            type: Sequelize.STRING
        },
        autoplay: {
            allowNull: true,
            type: Sequelize.STRING
        },
        gender: {
            type: Sequelize.ENUM,
            values: ['In_progress', 'Complete', 'Deffered']
        },
        completed: {
            allowNull: true,
            type: Sequelize.DATE
        },
        deffered: {
            allowNull: true,
            type: Sequelize.DATE
        },
        in_progress: {
            allowNull: true,
            type: Sequelize.DATE
        },
        asssigned: {
            allowNull: true,
            type: Sequelize.DATE
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
        }
    });
  
    return Personnel;
};
  