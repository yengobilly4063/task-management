import { Injectable } from "@nestjs/common";

@Injectable()
export class TasksService {

  getAllTasks(): string {
    return "all tasks";
  }

}