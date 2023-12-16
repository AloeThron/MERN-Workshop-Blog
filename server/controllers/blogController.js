// connect database
const slugify = require("slugify");
const Blogs = require("../models/blogs");

// save data
exports.create = (req, res) => {
  const { title, content, author } = req.body;
  const slug = slugify(title);

  switch (true) {
    case !title:
      return res.status(400).json({ error: "Title is null" });
      break;
    case !content:
      return res.status(400).json({ error: "Content is null" });
      break;
  }

  // send data to database
  Blogs.create({ title, content, author, slug })
    .then((blog) => res.json(blog))
    .catch((err) => res.status(400).json({ error: "Title is duplicate" }));
};

exports.getAllblogs = (req, res) => {
  Blogs.find({})
    .then((blogs) => res.json(blogs))
    .catch((err) => res.status(400).json({ error: "Title is duplicate" }));
};
