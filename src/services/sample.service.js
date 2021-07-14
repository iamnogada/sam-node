const { PrismaClient } = require("@prisma/client");

const employeeDB = config.datasource.employee;
const db = new PrismaClient({
  datasources: employeeDB,
});

exports.getList = async () => {
  const list = await db.sample.findMany({
    select: {
      id: true,
      title: true,
      body: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return list;
};

exports.getData = async (sampleId) => {
  const data = await db.sample.findUnique({
    where: {
      id: sampleId,
    },
    select: {
      id: true,
      title: true,
      body: true,
      createdAt: true,
    },
  });

  return data;
};

exports.createData = async (title, body) => {
  const sample = await db.sample.create({
    data: { title, body },
    select: {
      id: true,
      title: true,
      body: true,
      createdAt: true,
    },
  });
  return sample;
};

exports.updateData = async (sampleId, updateData) => {
  const sample = await db.sample.update({
    where: {
      id: sampleId,
    },
    data: updateData,
    select: {
      id: true,
      title: true,
      body: true,
      createdAt: true,
    },
  });
  return sample;
};

exports.deleteData = async (sampleId) => {
  const sample = await db.sample.delete({
    where: {
      id: sampleId,
    },
    select: {
      id: true,
      title: true,
      body: true,
      createdAt: true,
    },
  });
  return sample;
};
