document.addEventListener('DOMContentLoaded', () => {
    //  Update current year and last modified
    const currentYear = new Date().getFullYear();
    document.querySelector('#current-year').textContent = `${currentYear}`;
    const lastModifiedDate = document.lastModified;
    document.querySelector('#last-modified').textContent = `Date Last Modified ${lastModifiedDate}`;
  
    //  Mobile menu toggle
    const menuButton = document.getElementById("menu-button");
    const navMenu = document.getElementById("nav-menu");
  
    menuButton.addEventListener("click", function () {
      navMenu.classList.toggle("open");
      // Toggle button icon between ☰ and ✖
      if (navMenu.classList.contains("open")) {
        menuButton.innerHTML = "&times;"; // X symbol
    } else {
        menuButton.innerHTML = "&#9776;"; 
    }
    });
});

const courses = [
  {
    courseName: "Introduction to Programming ",
    courseCode: "CSE 110",
    completed: true,
    credits: 2,
  },
  {
    courseName: "Programming with Functions",
    courseCode: "CSE 111 ",
    completed: true,
    credits: 2,
  },
  {
    courseName: "Programming with Classes",
    courseCode: "CSE 210",
    completed: false,
    credits: 2,
  },
  {
    courseName: "Web Fundamentals",
    courseCode: "WDD 130",
    completed: true,
    credits: 2,
  },
  {
    courseName: "Dynamic Web Fundamentals",
    courseCode: "WDD 131",
    completed: true,
    credits: 2,
  },
  {
    courseName: "Web Frontend Development 1",
    courseCode: "WDD 231",
    completed: false,
    credits: 2,
  },
];

const calculateCreditsCompleted = () => {
  const completedCredits = courses
    .filter(course => course.completed)
    .reduce((total, course) => total + course.credits, 0);

  const creditsCountElement = document.getElementById("credits-count");
  creditsCountElement.textContent = completedCredits;
};

const filterCourses = (type) => {
  let filteredCourses;

  if (type === "All") {
    filteredCourses = courses;
  } else {
    filteredCourses = courses.filter(course => course.courseCode.includes(type));
  }

  const courseList = document.getElementById("course-list");
  courseList.innerHTML = ""; // Clear previous courses

  filteredCourses.forEach(course => {
    const courseDiv = document.createElement("div");
    courseDiv.textContent = course.courseCode;
    courseDiv.classList.add("course-item");

    if (course.completed) {
      courseDiv.classList.add("completed");
    }

    courseList.appendChild(courseDiv);
  });

  // Update the credits completed counter
  calculateCreditsCompleted();
};

// Call the function initially to display the credits on page load
calculateCreditsCompleted();



