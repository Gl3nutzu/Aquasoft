
module.exports = (sequelize, DataTypes) => {
    const Candidate = sequelize.define("candidate", {
        Candidate_name: {
            type: DataTypes.STRING,
            allowNULL: false
        },
        Email: {
            type: DataTypes.STRING,
            allowNULL: false
        },
        Start_date: {
            type: DataTypes.DATE,
            allowNULL: false
        },

        Salary: {
            type: DataTypes.INTEGER,
            allowNULL: false
        },

        Candidate_link: {
            type: DataTypes.STRING,
            allowNULL: false
        },
        Candidate_doc: {
            type: DataTypes.BLOB,
            allowNULL: true
        },
       
        
    }); 
    
    return Candidate;
}