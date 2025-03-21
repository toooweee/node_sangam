import postsRepository from "../models/post.js";
import fileService from "../services/file.service.js";

class PostService {
  create = async (post, picture) => {
    const fileName = await fileService.saveFile(picture);
    return postsRepository.create({ ...post, picture: fileName });
  };

  findAll = async () => {
    return postsRepository.find();
  };

  findOne = async (id) => {
    const post = await postsRepository.findById(id);

    if (!post) {
      throw new Error("Post not found");
    }

    return post;
  };

  update = async (id, newPost) => {
    const post = await postsRepository.findById(id);

    if (!post) {
      throw new Error("Post not found");
    }

    return postsRepository.findOneAndUpdate(post._id, newPost, { new: true });
  };

  delete = async (id) => {
    const post = await postsRepository.findByIdAndDelete(id);

    if (!post) {
      throw new Error("Post not found");
    }

    return post;
  };
}

export default new PostService();
