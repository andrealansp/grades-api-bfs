import mongoose from 'mongoose';

const db = {};
db.mongoose = mongoose;
db.url =
  'mongodb+srv://andrealves:S@lmos2300@andrealves.ykvuo.mongodb.net/gradesApi?retryWrites=true&w=majority';

export { db };
