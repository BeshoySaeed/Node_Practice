exports.getAllClass = (req, res, next) => {
  res.json(
    { id: 1, className: "A" },
    { id: 2, className: "B" },
    { id: 3, className: "C" }
  );
};

exports.postClass = (req, res, next) => {
  res.json({ message: "updated" });
};

exports.putClass = (req, res, next) => {
  res.json({ message: "add" });
};

exports.deletedClass = (req, res, next) => {
  res.json({ message: "deleted" });
};

exports.getClassById = (req, res, next) => {
  console.log(req.params);
  res.json({ id: req.params.id });
};

exports.getAllchildInClassById = (req, res, next) => {
  res.json(
    { stuId: 2, class: "A" },
    { stuId: 2, class: "A" },
    { stuId: 2, class: "A" },
    { stuId: 2, class: "A" },
    { stuId: 2, class: "A" }
  );
};
exports.getAllTeacherInClassById = (req, res, next) => {
  res.json(
    { teacherId: 2, class: "A" },
    { teacherId: 2, class: "A" },
    { teacherId: 2, class: "A" },
    { teacherId: 2, class: "A" },
    { teacherId: 2, class: "A" }
  );
};
