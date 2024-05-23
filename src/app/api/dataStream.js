import connectToDatabase from '../../lib/mongoose';
import { Server } from 'socket.io';

const ioHandler = (req, res) => {
  if (!res.socket.server.io) {
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on('connection', (socket) => {
      console.log('New client connected');
    });
  }
  res.end();
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default ioHandler;

export async function startChangeStream() {
  const { db } = await connectToDatabase();
  const collection = db.collection('datas');

  const changeStream = collection.watch();

  changeStream.on('change', (change) => {
    if (change.operationType === 'insert') {
      const io = res.socket.server.io;
      io.emit('documentAdded', change.fullDocument);
    }
  });
}
