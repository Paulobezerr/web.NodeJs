module.exports = (sequelize, DataTypes) => {
    const Song = sequelize.define('Song', {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      artistId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Artists',
          key: 'id'
        }
      }
    });
    return Song;
  };
  