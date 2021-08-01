'use strict';
const {
    Model
} = require('sequelize');
const { v4: uuid } = require('uuid');
module.exports = (sequelize, DataTypes) => {

    
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        
        static associate(models) {
            // define association here
        }
    };
    User.init({
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: () => uuid(),
            validate: {
                notNull: true
            }
        },
        fullName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'User',
    });
    
    return User;
};