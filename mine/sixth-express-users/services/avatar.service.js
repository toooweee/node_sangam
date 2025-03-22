class AvatarService {
  getFilePath = (file) => {
    return file.path();
  };
}

export default new AvatarService();
