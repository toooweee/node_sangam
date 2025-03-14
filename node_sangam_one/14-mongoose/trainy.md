```javascript
const mongoose = require("mongoose");
const postsSchema = new mongoose.Schema({
  title: String,
  createdAt: { type: Date, default: Date.now}
})

const PostModel = mongoose.model("Post", postsSchema);
```