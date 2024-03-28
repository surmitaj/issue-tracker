import express from 'express'
import multer from 'multer';
import ejsLayouts from 'express-ejs-layouts'
import path from 'path';
import ProjectsController from './src/controllers/project.controller.js';
import IssueController from './src/controllers/issue.controller.js';

const app = express()

app.use(express.static('public'))

const projectController = new ProjectsController()
const issueController = new IssueController()

app.use(ejsLayouts)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const upload = multer();
app.use(upload.none());
app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(), 'src', 'views'));

app.get('/', projectController.getProjects)
app.get('/addnewproject', projectController.getAddProject)
app.post('/', projectController.postAddProject)

app.get('/viewissues/:id', issueController.getIssues)
app.get('/addissue/:id', issueController.getAddIssue)
app.post('/postissue', issueController.postAddIssue)
app.get('/editissue/:id', issueController.getUpdateIssue)
app.post('/postupdatedissue', issueController.postUpdatedIssue)

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});