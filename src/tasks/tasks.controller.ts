import { Controller, Get, Post } from "@nestjs/common";
import { TasksService } from "./tasks.service";

@Controller("/tasks")
export class TasksController {

  constructor(
    private readonly tasksService: TasksService
  ) {}

  @Get()
  async getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTask() {

  }

}
