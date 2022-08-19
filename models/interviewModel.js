module.exports = (sequelize, DataTypes) => {
    const Interviu = sequelize.define("interviu", {
        Interview_date: {
            type: DataTypes.DATE,
            allowNULL: false
        },
        Interview_duration: {
            type: DataTypes.INTEGER,
            allowNULL: false
        },
        Interviewer: {
            type: DataTypes.STRING,
            allowNULL: false
        },
        Candidat_id: {
            type: DataTypes.INTEGER,
            allowNULL: false
        }
    }); 
    
    return Interviu;
}