const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Mongoose connected to the database");
  })
  .catch((err) => {
    console.log(err.message);
  });

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now() },
});

// create user model
const User = mongoose.model("User", userSchema);

const runQueryExamples = async () => {
  try {
    // create a new document;
    // const newUser = await User.create({
    //   name: "John Doe",
    //   email: "john@example.com",
    //   age: 42,
    //   isActive: true,
    //   tags: ["Developer", "CEO", "Manager"],
    // });

    // other method:
    // const newUser = new User({
    //   name: "asdf",
    //   email: "asdf@example.com",
    //   age: 52,
    //   isActive: true,
    //   tags: ["asdf", "asdf", "asdf"],
    // });
    //
    // await newUser.save();
    //
    // console.log(newUser);

    // const allUsers = await User.find({});
    // console.log(allUsers);
    // const updatedUser = await User.findByIdAndUpdate(
    //   "67d3a6b8664348900b0e19a8",
    //   { isActive: false },
    //   { new: true },
    // );
    //
    // console.log(updatedUser);

    //exclude
    // const selectedFields = await User.find().select("name email -_id");
    // console.log(selectedFields);

    // pagination
    // const limitedUsers = await User.find().limit(3).skip(1);
    // console.log(limitedUsers);

    // sorted users
    // const sortedUsers = await User.find({}).sort({ age: 1 });
    // console.log(sortedUsers);

    const countDocuments = await User.countDocuments({ isActive: true });
    console.log(countDocuments);
  } catch (e) {
    console.log(e.message);
  } finally {
    await mongoose.connection.close();
  }
};

runQueryExamples();
