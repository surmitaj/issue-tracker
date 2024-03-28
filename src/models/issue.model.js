export default class IssueModel {
    constructor(id, projectId, title, desc, author, label) {
      this.id = id;
      this.projectId = projectId
      this.title = title;
      this.desc = desc;
      this.author = author;
      this.label = label;
    }
  
    static getAllIssuesByProject(projectId) {
      const issuesByProject = issues.filter((item) => item.projectId == projectId)
      return issuesByProject;
    }
  
    static updateIssue(issueObj) {
      const index = issues.findIndex((issue) => issue.title == issueObj.title);
      issues[index] = issueObj;
    }
  
    static add(project, title, desc, author, label) {
      let newIssue = new IssueModel(
        Math.floor(Math.random()*100)+1,
        project,
        title,
        desc,
        author,
        label
      );
      issues.push(newIssue);
    }
  
    static getById(id) {
      return issues.find((issue) => issue.id == id);
    }
  }
  
  
  var issues = [
    new IssueModel(1, "1", "Issue 1", "Description for Issue 1", "Author 1", "New"),
    new IssueModel(2, "1", "Issue 2", "Description for Issue 2", "Author 2", "New"),
    new IssueModel(3, "2", "Issue 3", "Description for Issue 3", "Author 3", "New"),
  ];
