const { connection, createDatabaseIfNotExists, connectToDatabase } = require('./config/db.config');
const app = require('./src/app');
const { port } = require('./src/secret');

const main = async () => {
  try {
    await createDatabaseIfNotExists();
    await connectToDatabase();
    
    app.listen(port, () => {
      console.log(`Server is listening on http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Error during database initialization:', error.message);
    process.exit(1);
  }
}

main();
