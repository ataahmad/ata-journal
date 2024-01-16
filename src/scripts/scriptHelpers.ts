import * as mysql from 'mysql'


export const createDBConnection = () => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootpassword',
    database: 'journal_db'
  });

  connection.connect((err: mysql.MysqlError | null) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return null;
    }
    console.log('Successfully connected to the database.');
  });

  return connection;
};

export const executeQuery = (query: string, params: Array<string> = []) => {
  return new Promise((resolve, reject) => {
    const connection = createDBConnection();

    if (!connection) {
      reject('No database connection.');
      return;
    }

    connection.query(query, params, (err, results) => {
      connection.end();

      if (err) {
        reject(err);
        return;
      }

      resolve(results);
    });
  });
};

