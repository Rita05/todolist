

export default class TasksApi {
    constructor(serverUrl) {
        this.serverUrl = serverUrl
    }

    async getAll() {
        const resp = await fetch(`${this.serverUrl}/tasks`)
        const { tasks } = await resp.json()
        return tasks
    }

    async addTask(task) {
        let response=await fetch(`${this.serverUrl}/addedtasks`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        });
        const {tasks} = await response.json()
        return tasks
    }

    async deleteTask(taskId) {
        let response=await fetch(`${this.serverUrl}/deletedtasks`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(taskId)
        });
        const {tasks} = await response.json()
        return tasks
    }
}
