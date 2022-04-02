import { Task } from "../task/Task";
import { User } from "../user/User";

export type Project = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  tasks?: Array<Task>;
  updatedAt: Date;
  user?: User | null;
};
