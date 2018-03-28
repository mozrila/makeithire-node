// API Endpoints
const session = require('./session');
const registration = require('./registration');
const student = require('./student');
const user = require('./user');
const data = require('./data');
const email = require('./email');
const job = require('./job');

// Routers
const apiRouter = require('express').Router();

// Routes **To add public route, you must add it to the list in session.js**
apiRouter.get('/ping', session.pingSession);
apiRouter.post('/login', session.login);

apiRouter.post('/signUpStudent', registration.signUpStudent);
apiRouter.post('/signUpRecruiter', registration.signUpRecruiter);

apiRouter.get('/uploadResume', student.uploadResume);
apiRouter.get('/uploadCoverLetter', student.uploadCoverLetter);
apiRouter.get('/updateCompanyDetails', student.updateCompanyDetails);
apiRouter.get('/getStudentDetails', student.getStudentDetails);

apiRouter.get('/getMajors', data.getMajors);
apiRouter.get('/getDegrees', data.getDegrees);
apiRouter.get('/getUniversityList', data.getUniversityList);
apiRouter.get('/getCompanyList', data.getCompanyList);

apiRouter.get('/getUserDetails', user.getUserDetails);

apiRouter.post('/requestRecruiter', email.requestRecruiter);
apiRouter.post('/adminAddRecruiter', email.adminAddRecruiter);

apiRouter.get('/getAllJobs', job.getAllJobs);
apiRouter.post('/getJobDetails', job.getJobDetails);
// apiRouter.post('/addJobPosting', job.addJobPosting);
// apiRouter.post('/editJobPosting', job.editJobPosting);


module.exports = apiRouter;
