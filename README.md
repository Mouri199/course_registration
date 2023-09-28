# Add at least 3 project feature

### Course Selection and Information Display:
Users can view a list of available courses, each with its title, description, price, and credit information.

### Alert Notifications with Toastify:
 Users receive alerts when they attempt to add a course they've already selected, when their remaining credit goes below 0, or when it exceeds 20.

 ### Dynamic Side Information Display:
 It provides users with a clear summary of their selected courses and their progress toward the credit limit.

 
# Discuss how you manage the state in your assignment project

### 1.Displaying Course Cards:
The component fetches a list of course cards from a JSON data source and displays them in a grid layout.

### Course Selection:
Users can click the "Select" button on a course card to add it to their selected courses list.

### Credit Management:
The component keeps track of the total credit hours and total price of the selected courses.It also calculates the remaining credit hours available to the user, with a maximum limit of 20 credit hours.

### Side Information:
A "Sideinfo" component displays information about the user's selected courses, total credit hours, remaining credit hours, and the total price.

### Toast Notifications:
Toast notifications are used to alert the user about important actions and constraints, such as duplicate course selection or exceeding credit limits.





