exports.getAllTeachers = (req, res, next) => {
  res.json([
    { id: 1, title: "teacher 1" },
    { id: 2, title: "teacher 2" },
    { id: 3, title: "teacher 3" },
  ]);
};
exports.postTeacher = (req, res, next) => {
  res.json({ message: "updated" });
};
exports.putTeachers = (req, res, next) => {
  res.json({ message: "add" });
};
exports.deleteTeachers = (req, res, next) => {
  res.json({ message: "deleted" });
};

exports.getTeacherById = (req, res, next) => {
  console.log(req.params);
  res.json({ id: req.params.id });
};

exports.getSuper = (req, res, next) => {
  res.json({ superId: 2, name: "ahmed" });
};
