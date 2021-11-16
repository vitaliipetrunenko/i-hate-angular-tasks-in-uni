enum Category {
  BusinessAnalyst = "Business analyst",
  Developer = "Developer",
  Designer = "Designer",
  QA = "QA",
  ScrumMaster = "Scrum master",
}

type worker = {
  Name: string;
  id: string;
  surname: string;
  available: boolean;
  salary: number;
  category: Category;
};

const getAllWorkers = (): worker[] => {
  const workers = [
    {
      id: "1",
      Name: "Ivan",
      surname: "Ivanov",
      available: true,
      salary: 1000,
      category: Category.Developer,
    },
    {
      id: "2",
      Name: "Petro",
      surname: "Petrov",
      available: true,
      salary: 1500,
      category: Category.Developer,
    },
    {
      id: "3",
      Name: "Vasyl",
      surname: "Vasyliev",
      available: false,
      salary: 1600,
      category: Category.Developer,
    },
    {
      id: "4",
      Name: "Evgen",
      surname: "Zhukov",
      available: true,
      salary: 1300,
      category: Category.Developer,
    },
  ];
  return workers;
};

const logFirstAvailable = (workers: worker[] = getAllWorkers()): void => {
  console.log(`quantity:  ${workers?.length}`);
  for (const person of workers) {
    console.log(`worker:  ${person?.Name} ${person?.surname}`);
  }
};
logFirstAvailable(getAllWorkers());

const getWorkersNamesByCategory = (
  workers: worker[],
  category: Category = Category.Designer
): string[] => {
  const output: string[] = [];
  workers.forEach(
    (worker) => worker?.category === category && output.push(worker.surname)
  );
  return output;
};

const logWorkersNames = (array: string[]): void => {
  array.forEach((e) => console.log(e));
};

getAllWorkers().forEach((worker) => {
  worker?.category === Category.Developer &&
    console.log(`worker:  ${worker?.Name} ${worker?.surname}`);
});

const getWorkerByID = (workers: worker[], id: string): {} => {
  const result = workers.find((worker) => worker.id === id);

  return {
    Name: result.Name || "No data",
    surname: result.surname || "No data",
    salary: result.salary || "No data",
  };
};

const createCustomerID = (name: string, id: string | number): string => {
  return name.concat(id.toString());
};

const myId = createCustomerID("ANN", 10);
console.log(myId);

const IdGenerator = createCustomerID;

const createCustomer = (
  name: string,
  age?: number | string,
  city?: string
): void => {
  console.log(`name is ${name}`);
  age && console.log(`age is ${age}`);
  city && console.log(`city is ${city}`);
};

createCustomer("vova", "", "");
createCustomer("petya", 3);
createCustomer("olya", 6, "kyiv");

getWorkersNamesByCategory(getAllWorkers());
logFirstAvailable();

const сheckoutWorkers = (
  customer: string,
  workerIDs: string[] | number[],
  workers: worker[] = getAllWorkers()
) => {
  console.log("customer :", customer);
  const returnArray: object[] = [];
  const Ids = workerIDs.map((e) => {
    if (typeof e === "number") {
      return e.toString();
    }
    return e;
  });
  workers.forEach((e) => {
    if (Ids.includes(e.id) && e.available) {
      returnArray.push(getWorkerByID(workers, e.id));
    }
  });
  return returnArray;
};

console.log(сheckoutWorkers("valera", [1, 3,2]));
