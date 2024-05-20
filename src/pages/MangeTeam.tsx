export const MangeTeam = () => {
  const teamData = [
    {
      id: 1,
      name: "Ahmed",
      email: "ahmed@asfase.css",
      age: 25,
      phone: "0123456789",
      role: "admin",
    },
    {
      id: 2,
      name: "Maria",
      email: "maria@domain.com",
      age: 30,
      phone: "0987654321",
      role: "user",
    },
    {
      id: 3,
      name: "John",
      email: "john@example.org",
      age: 28,
      phone: "0123984756",
      role: "editor",
    },
    {
      id: 4,
      name: "Linda",
      email: "linda@webmail.com",
      age: 22,
      phone: "0678452319",
      role: "admin",
    },
    {
      id: 5,
      name: "Robert",
      email: "robert@mailservice.net",
      age: 35,
      phone: "0567891234",
      role: "user",
    },
    {
      id: 6,
      name: "David",
      email: "david@myemail.com",
      age: 29,
      phone: "0456781239",
      role: "user",
    },
    {
      id: 7,
      name: "Emma",
      email: "emma@workplace.io",
      age: 26,
      phone: "0345678912",
      role: "editor",
    },
    {
      id: 8,
      name: "Michael",
      email: "michael@domain.com",
      age: 40,
      phone: "0234567891",
      role: "admin",
    },
    {
      id: 9,
      name: "Sophia",
      email: "sophia@service.com",
      age: 31,
      phone: "0123456789",
      role: "user",
    },
    {
      id: 10,
      name: "James",
      email: "james@domain.org",
      age: 27,
      phone: "0987654321",
      role: "editor",
    },
    {
      id: 11,
      name: "Olivia",
      email: "olivia@webservice.net",
      age: 24,
      phone: "0765432198",
      role: "user",
    },
    {
      id: 12,
      name: "William",
      email: "william@domain.io",
      age: 33,
      phone: "0654321987",
      role: "admin",
    },
    {
      id: 1,
      name: "Ahmed",
      email: "ahmed@asfase.css",
      age: 25,
      phone: "0123456789",
      role: "admin",
    },
    {
      id: 2,
      name: "Maria",
      email: "maria@domain.com",
      age: 30,
      phone: "0987654321",
      role: "user",
    },
    {
      id: 3,
      name: "John",
      email: "john@example.org",
      age: 28,
      phone: "0123984756",
      role: "editor",
    },
    {
      id: 4,
      name: "Linda",
      email: "linda@webmail.com",
      age: 22,
      phone: "0678452319",
      role: "admin",
    },
    {
      id: 5,
      name: "Robert",
      email: "robert@mailservice.net",
      age: 35,
      phone: "0567891234",
      role: "user",
    },
    {
      id: 6,
      name: "David",
      email: "david@myemail.com",
      age: 29,
      phone: "0456781239",
      role: "user",
    },
    {
      id: 7,
      name: "Emma",
      email: "emma@workplace.io",
      age: 26,
      phone: "0345678912",
      role: "editor",
    },
    {
      id: 8,
      name: "Michael",
      email: "michael@domain.com",
      age: 40,
      phone: "0234567891",
      role: "admin",
    },
    {
      id: 9,
      name: "Sophia",
      email: "sophia@service.com",
      age: 31,
      phone: "0123456789",
      role: "user",
    },
    {
      id: 10,
      name: "James",
      email: "james@domain.org",
      age: 27,
      phone: "0987654321",
      role: "editor",
    },
    {
      id: 11,
      name: "Olivia",
      email: "olivia@webservice.net",
      age: 24,
      phone: "0765432198",
      role: "user",
    },
    {
      id: 12,
      name: "William",
      email: "william@domain.io",
      age: 33,
      phone: "0654321987",
      role: "admin",
    },
  ];
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-[100%] p-2 h-[calc(100vh-72px)]">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Age
            </th>
            <th scope="col" className="px-6 py-3">
              Phone
            </th>
            <th scope="col" className="px-6 py-3">
              Role
            </th>
          </tr>
        </thead>
        <tbody>
          {teamData.map((item) => {
            return (
              <tr
                key={item.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.id}
                </th>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">{item.email}</td>
                <td className="px-6 py-4">{item.age}</td>
                <td className="px-6 py-4">{item.phone}</td>
                <td
                  className={`px-6 py-4 ${item.role == "admin" && "font-bold"}`}
                >
                  {item.role}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
