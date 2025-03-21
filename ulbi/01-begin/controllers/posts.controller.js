import postService from "../services/post.service.js";

class PostsController {
  create = async (req, res) => {
    try {
      const post = req.body;

      if (!post) {
        return res
          .status(400)
          .send({ status: "error", message: "Invalid credentials" });
      }

      const newPost = await postService.create(post, req.files.picture);

      return res.status(200).json(newPost);
    } catch (e) {
      res
        .status(500)
        .json({ status: "error", message: "Internal server error" });
    }
  };

  findAll = async (req, res) => {
    try {
      const posts = await postService.findAll();
      return res.status(200).json(posts);
    } catch (e) {
      res
        .status(500)
        .json({ status: "error", message: "Internal server error" });
    }
  };

  findOne = async (req, res) => {
    try {
      const post = await postService.findOne(req.params.id);
      res.status(200).json(post);
    } catch (e) {
      res
        .status(500)
        .json({ status: "error", message: "Internal server error" });
    }
  };

  update = async (req, res) => {
    try {
      const updatedPost = await postService.update(req.params.id, req.body);
      res.status(200).json(updatedPost);
    } catch (e) {
      res
        .status(500)
        .json({ status: "error", message: "Internal server error" });
    }
  };

  delete = async (req, res) => {
    try {
      const deletedPost = await postService.delete(req.params.id);
      res.status(200).json(deletedPost);
    } catch (e) {
      res
        .status(500)
        .json({ status: "error", message: "Internal server error" });
    }
  };
}

export default new PostsController();
