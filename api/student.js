const db = require('./utils/db');
const { getSignedUrl } = require('./utils/s3');

// POST API: Uploads Resume
function uploadResume(req, res) {
  const fileName = `${req.user.EmailID}_Resume.pdf`;
  handleS3Request(req, res, fileName);
}

// POST API: Uploads CoverLetter
function uploadCoverLetter(req, res) {
  const fileName = `${req.user.EmailID}_Cover_Letter.pdf`;
  handleS3Request(req, res, fileName);
}

// GET API: Get Student Details
function getStudentDetails(req, res) {
  const sql = 'SELECT * FROM Student WHERE idUser = (SELECT idUser FROM User WHERE EmailID = ?)';
  db.query(sql, req.user.EmailID, (err, res) => {
    if (err) {
      return res.status(400)
        .json({ message: err });
    }
    console.log(res);
    return res.status(200)
      .json({
        message: 'Success',
        response: res,
      });
  });
}

module.exports = {
  uploadCoverLetter,
  uploadResume,
  getStudentDetails,
};

function handleS3Request(req, res, fileName) {
  getSignedUrl(fileName, req.query.contentType, (signedUrl) => {
    if (signedUrl) {
      res.json({
        signedUrl,
        fileName,
      });
    } else {
      res.status(500)
        .json({
          success: false,
          message: 'Could not get signed URL',
        });
    }
  });
}
