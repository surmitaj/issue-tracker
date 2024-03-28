import IssueModel from '../models/issue.model.js';

class IssueController {
  getIssues(req, res, next) {
    const id = req.params.id
    var issues = IssueModel.getAllIssuesByProject(id);
    res.render('all-issues', {
      issues
    });
  }

  getAddIssue(req, res, next) {
    const projectId = req.params.id
    res.render('new-issue', { projectId });
  }

  postAddIssue(req, res, next) {
    const { projectId, title, desc, author, label } = req.body;
    IssueModel.add(projectId, title, desc, author, label);
    res.redirect(`/viewissues/${projectId}`);
  }

  getUpdateIssue(req, res, next) {
    const issueId = req.params.id
    const issue = IssueModel.getById(issueId)
    res.render('update-issue', { issue });
  }

  postUpdatedIssue(req, res, next) {
    IssueModel.updateIssue(req.body);
    var issues = IssueModel.getAllIssuesByProject(req.body.projectId);
    res.render('all-issues', {
      issues
    })
  }
}

export default IssueController;
