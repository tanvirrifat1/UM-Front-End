import { IFaculty, IMeta } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../slice/tag-types";

const BASE_FACULTY_API = "/faculties";

export const facultyApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    faculties: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: BASE_FACULTY_API,
          method: "GET",
          params: arg,
        };
      },
      transformErrorResponse: (response: IFaculty[], meta: IMeta) => {
        return {
          faculties: response,
          meta,
        };
      },
      providesTags: [tagTypes.faculty],
    }),

    addFacultyFormData: build.mutation({
      query: (data) => ({
        url: "/users/create-faculty",
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.faculty],
    }),

    faculty: build.query({
      query: (id) => ({
        url: `${BASE_FACULTY_API}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.faculty],
    }),
    updateFaculty: build.mutation({
      query: (data) => ({
        url: `${BASE_FACULTY_API}/${data?.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.faculty],
    }),
    deleteFaculty: build.mutation({
      query: (id) => ({
        url: `${BASE_FACULTY_API}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.faculty],
    }),
  }),
});

export const {
  useAddFacultyFormDataMutation, //create
  useDeleteFacultyMutation, // delete
  useFacultiesQuery, //get all
  useUpdateFacultyMutation, //update
  useFacultyQuery, // get single
} = facultyApi;
