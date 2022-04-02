import { TaskCreateNestedManyWithoutProjectsInput } from "./TaskCreateNestedManyWithoutProjectsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectCreateInput = {
  description?: string | null;
  name?: string | null;
  tasks?: TaskCreateNestedManyWithoutProjectsInput;
  user?: UserWhereUniqueInput | null;
};
