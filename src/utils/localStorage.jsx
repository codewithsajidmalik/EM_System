
const employees = [
  {
      "id": 1,
      "email": "e@e.com",
      "password": "123",
      "firstname": "Arjun",
      "taskNumbers": {
          "active": 2,
          "new_task": 1,
          "completed": 1,
          "failed": 0
      },
      "tasks": [
          {
              "active": true,
              "new_task": true,
              "completed": false,
              "failed": false,
              "task_title": "Complete Report",
              "task_description": "Complete the quarterly financial report.",
              "task_date": "2024-10-20",
              "category": "Finance"
          },
          {
              "active": false,
              "new_task": false,
              "completed": true,
              "failed": false,
              "task_title": "Update Client Database",
              "task_description": "Update the contact information for all new clients.",
              "task_date": "2024-10-15",
              "category": "Client Relations"
          },
          {
              "active": true,
              "new_task": false,
              "completed": false,
              "failed": false,
              "task_title": "Team Meeting Preparation",
              "task_description": "Prepare slides for the upcoming team meeting.",
              "task_date": "2024-10-23",
              "category": "Internal"
          }
      ]
  },
  {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "firstname": "Priya",
      "taskNumbers": {
          "active": 2,
          "new_task": 1,
          "completed": 1,
          "failed": 0
      },
      "tasks": [
          {
              "active": true,
              "new_task": true,
              "completed": false,
              "failed": false,
              "task_title": "Client Presentation",
              "task_description": "Prepare and deliver presentation for the new client project.",
              "task_date": "2024-10-24",
              "category": "Sales"
          },
          {
              "active": false,
              "new_task": false,
              "completed": true,
              "failed": false,
              "task_title": "Fix Website Bug",
              "task_description": "Resolve the login bug on the company website.",
              "task_date": "2024-10-16",
              "category": "IT"
          },
          {
              "active": true,
              "new_task": false,
              "completed": false,
              "failed": false,
              "task_title": "Prepare Budget Proposal",
              "task_description": "Draft the budget proposal for the next fiscal year.",
              "task_date": "2024-10-30",
              "category": "Finance"
          }
      ]
  },
  {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "firstname": "Amit",
      "taskNumbers": {
          "active": 2,
          "new_task": 2,
          "completed": 1,
          "failed": 0
      },
      "tasks": [
          {
              "active": true,
              "new_task": true,
              "completed": false,
              "failed": false,
              "task_title": "Marketing Campaign",
              "task_description": "Design the new marketing campaign for social media.",
              "task_date": "2024-10-25",
              "category": "Marketing"
          },
          {
              "active": true,
              "new_task": true,
              "completed": false,
              "failed": false,
              "task_title": "Review Contracts",
              "task_description": "Review legal contracts for upcoming projects.",
              "task_date": "2024-10-26",
              "category": "Legal"
          },
          {
              "active": false,
              "new_task": false,
              "completed": true,
              "failed": false,
              "task_title": "Complete Employee Survey",
              "task_description": "Submit responses to the annual employee engagement survey.",
              "task_date": "2024-10-10",
              "category": "HR"
          }
      ]
  },
  {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "firstname": "Sneha",
      "taskNumbers": {
          "active": 2,
          "new_task": 1,
          "completed": 1,
          "failed": 0
      },
      "tasks": [
          {
              "active": true,
              "new_task": true,
              "completed": false,
              "failed": false,
              "task_title": "Research Competitors",
              "task_description": "Conduct research on competitor pricing models.",
              "task_date": "2024-10-27",
              "category": "Business Development"
          },
          {
              "active": false,
              "new_task": false,
              "completed": true,
              "failed": false,
              "task_title": "Launch New Product",
              "task_description": "Oversee the launch of the new product line.",
              "task_date": "2024-10-05",
              "category": "Product"
          },
          {
              "active": true,
              "new_task": false,
              "completed": false,
              "failed": false,
              "task_title": "Develop Training Program",
              "task_description": "Create a training program for new hires.",
              "task_date": "2024-11-01",
              "category": "HR"
          }
      ]
  },
  {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "firstname": "Rajesh",
      "taskNumbers": {
          "active": 2,
          "new_task": 2,
          "completed": 0,
          "failed": 1
      },
      "tasks": [
          {
              "active": true,
              "new_task": true,
              "completed": false,
              "failed": false,
              "task_title": "Organize Event",
              "task_description": "Plan and organize the annual company retreat.",
              "task_date": "2024-10-28",
              "category": "Operations"
          },
          {
              "active": false,
              "new_task": false,
              "completed": false,
              "failed": true,
              "task_title": "Finalize Budget",
              "task_description": "Finalize and submit the budget proposal for the year.",
              "task_date": "2024-10-15",
              "category": "Finance"
          },
          {
              "active": true,
              "new_task": true,
              "completed": false,
              "failed": false,
              "task_title": "Employee Feedback",
              "task_description": "Collect and compile employee feedback for the leadership team.",
              "task_date": "2024-11-03",
              "category": "HR"
          }
      ]
  }
];

const admin =[{
  "id":1,
  "email": "admin@example.com",
  "password":"123"
}];

  export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
                

  }

export const getLocalStorage = ()=>{
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))

  return {employees,admin};

}