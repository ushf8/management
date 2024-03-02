class ProjectManagementTool {
    constructor() {
        this.tasks = [];
        this.milestones = [];
        this.teamCommunication = [];
        this.projectAnalytics = {};
    }

    addTask(task) {
        this.tasks.push(task);
    }

    addMilestone(milestone) {
        this.milestones.push(milestone);
    }

    addTeamCommunication(message) {
        this.teamCommunication.push(message);
    }

    setProjectAnalytics(analytics) {
        this.projectAnalytics = analytics;
    }

    viewTasks() {
        console.log("Tasks:");
        this.tasks.forEach(task => {
            console.log(task);
        });
    }

    viewMilestones() {
        console.log("Milestones:");
        this.milestones.forEach(milestone => {
            console.log(milestone);
        });
    }

    viewTeamCommunication() {
        console.log("Team Communication:");
        this.teamCommunication.forEach(message => {
            console.log(message);
        });
    }

    viewProjectAnalytics() {
        console.log("Project Analytics:");
        console.log(this.projectAnalytics);
    }
}

// 示例用法
const projectManager = new ProjectManagementTool();
projectManager.addTask("Design UI mockups");
projectManager.addTask("Develop backend functionality");
projectManager.addMilestone("Complete UI design phase");
projectManager.addTeamCommunication("Scheduled team meeting for tomorrow");
projectManager.setProjectAnalytics({ progress: "50%", issues: 3 });

// 查看项目信息
projectManager.viewTasks();
projectManager.viewMilestones();
projectManager.viewTeamCommunication();
projectManager.viewProjectAnalytics();
