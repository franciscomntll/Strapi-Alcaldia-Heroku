module.exports = {
    routes: [
      {
        method: "GET",
        path: "/departmentsAll",
        handler: "department.findAll",
        config: {
          policies: [],
          auth: false,
        },
      },
    ],
  };