exports.getAllChild = (req, res, next) => {
  res.json([
    { id: 1, name: "omar", age: "24" },
    { id: 2, name: "Bishoy", age: "26" },
    { id: 3, name: "Saeed", age: "29" },
  ]);
};

exports.postChild = (req, res, next) => {
  res.json({ message: "updated" });
};
exports.putChild = (req, res, next) => {
  res.json({ message: "add" });
};
exports.deleteChild = (req, res, next) => {
  res.json({ message: "delete" });
};

exports.getChildByID = (req, res, next) => {
  console.log(req.params.id);
  res.json({ id: req.params.id });
};

exports.getChildClassByID = (req, res, next) => {
  console.log(req.params.id);
  res.json({ childId: req.params.id, class: "A" });
};
