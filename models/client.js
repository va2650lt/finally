module.exports = (sequelize, DataTypes) => {

    let Client = sequelize.define('Client', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }, email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }, phone: {
            type: DataTypes.STRING,
            allowNull: true
        }, issue: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })

    // force specifies whether to drop the table or not
    // true = drop table every time app restarts. Need this setting if table schema changed.
    // false = keep table
    Client.sync({force: false}).then( () => {
        console.log('synced client table')
    })

    return Client  
} 



