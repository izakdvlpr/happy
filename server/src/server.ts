import 'dotenv/config';

import server from './app';

server.listen(process.env.PORT, () => console.log('Server started'));