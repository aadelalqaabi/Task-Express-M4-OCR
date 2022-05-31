const Tesseract = require("tesseract.js");

exports.ocrCreate = async (req, res, next) => {
  try {
    if (req.file) {
      console.log("im here");
      req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
      Tesseract.recognize(req.body.image, "eng", {
        logger: (m) => console.log(m),
      }).then(({ data: { text } }) => {
        console.log(text);
      });
    }
    res.status(201).json("text");
  } catch (error) {
    next(error);
  }
};
