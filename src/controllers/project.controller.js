import ProjectModel from '../models/project.model.js';

class ProjectsController {
  getProjects(req, res, next) {
    var projects = ProjectModel.getAll();
    res.render('index', {
      projects
    });
  }

  getAddProject(req, res, next) {
    res.render('new-project');
  }

  postAddProject(req, res, next) {
    const { name, desc, author } = req.body;
    console.log(name, desc, author, req.body)
    ProjectModel.add(name, desc, author);
    res.redirect('/');
  }
}

export default ProjectsController;
