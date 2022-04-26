
import 'isomorphic-fetch'
import Api from './real-tasks-api'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

const testTasks = [
    { id: 1, taskName: 'buy products' },
    { id: 2, taskName: 'wash the dishes' }
]

const handlers = [
    rest.get('http://localhost/tasks', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                tasks: testTasks
            }),
        )
    }),
    rest.post('http://localhost/addedtasks', (req, res, ctx) => {
        let task = req.body
        testTasks.push({ id: 3, taskName: task })
        return res(
            ctx.status(200),
            ctx.json({
                tasks: testTasks
            }),
        )
    }),

    rest.post('http://localhost/deletedtasks', (req, res, ctx) => {
        let taskId = req.body
        let index = testTasks.findIndex(function (task) {
            return task.id === taskId;
        })
        if (index !== -1) testTasks.splice(index, 1)
        return res(
            ctx.status(200),
            ctx.json({
                tasks: testTasks
            }),
        )
    }),
]

const server = setupServer(...handlers)
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe("Check all actions of getting tasks", () => {
    const api = new Api("http://localhost")
    it("Testing of all tasks fetching", async () => {
        const tasks = await api.getAll()
        console.log(tasks)
        console.log(testTasks)
        expect(tasks).not.toBeUndefined()
        expect(tasks.every((_, i) => tasks[i].taskName === testTasks[i].taskName)).toBeTruthy()
    })

    it("Testing adding tasks", async () => {
        const tasks = await api.addTask('meet with friends')
        console.log(tasks)
        console.log(testTasks)
        expect(tasks).not.toBeUndefined()
        expect(tasks.every((_, i) => tasks[i].taskName === testTasks[i].taskName)).toBeTruthy()
    })

    it("Testing deleting tasks", async () => {
        const tasks = await api.deleteTask(2)
        console.log(tasks)
        console.log(testTasks)
        expect(tasks).not.toBeUndefined()
        expect(tasks.length).toBe(2)
    })

})
