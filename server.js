const express = require('express');
const { json, urlencoded } = require('body-parser');
const cors = require('cors');
const { connect } = require('./src/utils/db');
const messageRouter = require('./src/resources/messages/message.router');
const userRouter = require('./src/resources/user/user.router');
const conversationRouter = require('./src/resources/conversations/conversation.router');

const app = express();
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));

app.use('/messages', messageRouter);
app.use('/user', userRouter);
app.use('/conversation', conversationRouter);

module.exports.start = async () => {
  try {
    await connect();
    const server = app.listen(3000, () => {
      console.log('Server is up and running at port ', server.address().port);
    });
  } catch (e) {
    console.error(e);
  }
}

