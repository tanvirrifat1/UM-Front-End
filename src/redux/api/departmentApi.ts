import { tagTypes } from "../slice/tag-types";
import { baseApi } from "./baseApi";

const DEPARTMENT_API = "/management-departments'";

export const departmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addDepartment: build.mutation({
      query: (data) => ({
        url: DEPARTMENT_API,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.department],
    }),
  }),
});
export const { useAddDepartmentMutation } = departmentApi;
