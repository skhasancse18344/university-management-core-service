import { AcademicSemester, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const insertIntoDb = async (
  data: AcademicSemester
): Promise<AcademicSemester> => {
  const newAcademicSemester = await prisma.academicSemester.create({
    data,
  });
  return newAcademicSemester;
};
export const AcademicSemesterService = {
  insertIntoDb,
};
