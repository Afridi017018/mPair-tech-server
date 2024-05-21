const usersTable = `CREATE TABLE IF NOT EXISTS users(
    id BIGINT  NOT NULL UNIQUE AUTO_INCREMENT,
    name VARCHAR(1000) NOT NULL,
    eid VARCHAR(1000) NOT NULL UNIQUE,
    email VARCHAR(1000) NOT NULL UNIQUE,
    position VARCHAR(1000) NOT NULL,
    gender VARCHAR(1000) NOT NULL,
    password VARCHAR(1000) NOT NULL,
    PRIMARY KEY(id)
   )
`



module.exports = usersTable;