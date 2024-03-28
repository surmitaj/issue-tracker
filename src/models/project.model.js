export default class ProjectModel {
  constructor(id, name, desc, author) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.author = author;
  }

  static getAll() {
    return projects;
  }

  static update(projectObj) {
    const index = projects.findIndex((p) => p.id == projectObj.id);
    projects[index] = projectObj;
  }

  static add(name, desc, author) {
    let newProject = new ProjectModel(
      Math.floor(Math.random()*100)+1,
      name,
      desc,
      author
    );
    projects.push(newProject);
  }

  static getById(id) {
    return projects.find((p) => p.id == id);
  }
}


var projects = [
  new ProjectModel(1, "Project 1", "Description for Project 1", "Author 1"),
  new ProjectModel(2, "Project 2", "Description for Project 2", "Author 2"),
  new ProjectModel(3, "Project 3", "Description for Project 3", "Author 3"),
];