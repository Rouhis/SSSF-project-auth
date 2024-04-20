import app from './app';
import mongoConnect from './lib/db';

const port = process.env.PORT || 3000;
(async () => {
  try {
    console.log('Attempting to connect to MongoDB...');
    await mongoConnect();
    console.log('Successfully connected to MongoDB.');
    app.listen(port, () => {
      /* eslint-disable no-console */
      console.log(`Listening: http://localhost:${port}`);
      /* eslint-enable no-console */
    });
  } catch (error) {
    console.log('Server error', (error as Error).message);
  }
})();
