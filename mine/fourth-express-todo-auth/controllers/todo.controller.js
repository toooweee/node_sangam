class todoController {
  getAllTodos = async (req, res, next) => {
    return res.status(200).json([
      {
        id: 1,
        title: "All",
      },
    ]);
  };
}

module.exports = new todoController();
