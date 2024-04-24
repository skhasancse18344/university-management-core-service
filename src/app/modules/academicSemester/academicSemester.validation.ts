import { z } from 'zod';

const create = z.object({
  body: z.object({
    year: z.number({
      required_error: 'Year is required',
    }),
    title: z.number({
      required_error: 'Title is required',
    }),
    code: z.number({
      required_error: 'Code is required',
    }),
    startMonth: z.number({
      required_error: 'Start Month is required',
    }),
    endMonth: z.number({
      required_error: 'End Month is required',
    }),
  }),
});

export const AcademicSemesterValidation = {
  create,
};
