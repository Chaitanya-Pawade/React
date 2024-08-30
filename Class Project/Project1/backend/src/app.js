const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://user7897:user2080@cluster0.e04ovxe.mongodb.net/customers', {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define Customer Schema
const customerSchema = new mongoose.Schema({
  uid: { type: Number, required: true, unique: true },
  fname: { type: String, required: true },
  mname: { type: String, required: true },
  lname: { type: String, required: true },
  title: { type: String, required: true },
  phone: { type: String, required: true },
  calendar: { type: String, required: true },
  address: { type: String, required: true },
});

// Create Customer Model
const Customer = mongoose.model('Customer', customerSchema);

// Routes
app.get('/api/customers', async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/api/customers', async (req, res) => {
  try {
    const newCustomer = new Customer(req.body);
    await newCustomer.save();
    res.status(201).json(newCustomer);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.put('/api/customers/:id', async (req, res) => {
  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedCustomer);
  } catch (err) {
    res.status(400).send(err);
  }
});

//delete function code 
app.delete('/api/customers/:id', async (req, res) => {
  console.log(req.params.id)
  const id = Number(req.params.id)
  try {
    const data = await Customer.findOneAndDelete({ uid: id });
    console.log(data)
    res.status(200).json(
      {
        msg: "deleted successfully"
      }
    );
  } catch (err) {
    res.status(400).send(err);
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
