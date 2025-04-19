const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  company: {
    type: String
  },
  contact_info: {
    type: Map,
    of: String
  }
}, { timestamps: true });

module.exports = mongoose.model('Client', clientSchema);
