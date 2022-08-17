module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define("project", {
        // ID: {
        //     type: DataTypes.INTEGER,
        //     allowNULL: false
        // },
        Project_no: {
            type: DataTypes.STRING,
            allowNULL: false
        },
        Project_short_description: {
            type: DataTypes.TEXT,
            allowNULL: false
        },
        Request_date: {
            type: DataTypes.DATE,
            allowNULL: false
        },
        Project_start_date: {
            type: DataTypes.DATE,
            allowNULL: false
        },
        Project_duration: {
            type: DataTypes.INTEGER,
            allowNULL: false
        },
        Project_currency: {
            type: DataTypes.STRING,
            allowNULL: false
        },
        Client: {
            type: DataTypes.STRING,
            allowNULL: false
        },
        Working_location: {
            type: DataTypes.STRING,
            allowNULL: false
        },
        // Travel_required: {
        //     types: DataTypes.STRING,
        //     allowNULL: false
        // },
        Team_members: {
            type: DataTypes.INTEGER,
            allowNULL: false
        },
        Working_hours: {
            type: DataTypes.STRING,
            allowNULL: false
        },
        Mandatory_skills: {
            type: DataTypes.STRING,
            allowNULL: false
        },
        Nice_to_have_skills: {
            type: DataTypes.STRING,
            allowNULL: false
        },
        To_Do: {
            type: DataTypes.STRING,
            allowNULL: false
        }
    }); 
    
    return Project;
}