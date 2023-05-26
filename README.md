The web application is designed to showcase team information and their respective logos, along with additional functionality such as sorting, status indicators, and video previews. 

The project is implemented in React and adheres to the given requirements, including TypeScript integration, responsive design, and clean code practices.

## Project Structure
The project follows a typical React application structure with the following key components and folders:
- src/components: Contains reusable UI components used throughout the application.
- src/assets: Contains static assets such as images and videos.
- src/data: Includes the data source for the team list.
- src/App.tsx: The main application component that handles rendering and state management.
- src/index.tsx: The entry point of the application.

## Installation and Setup
To set up the project locally, follow these steps:

- Clone the project repository from [repository-url].
- Ensure that Node.js and npm (Node Package Manager) are installed on your machine.
- Open a terminal and navigate to the project root directory.
- Run the command npm install to install the project dependencies.
- Once the installation is complete, run the command npm start to start the development server.
- Access the application by visiting http://localhost:3000 in your web browser.

## Features and Functionality
The web application provides the following features and functionality based on the given requirements:

### Displaying Team List:

The team list is fetched from a data source, which can be replaced or extended as needed.

Each team's logo is displayed in the first column, adhering to the specified conditions:

- If the logo type is "attach," the corresponding image can be found in the assets/images folder with the filename specified in the "data" key.
- If the logo type is "string," the corresponding image can be found in the "data" key.
- If there is no logo, a default image named "default.png" in the assets/images folder is rendered.

The team list is sorted alphabetically by the team's location.

If a team does not have a "nextSchedule," the table displays "N/A" in the respective cell.

The "State" column displays a distinct label based on the team's status:
- "recording" status is indicated with a green color.
- "recorded" status is indicated with a blue color.
- "offline" status is indicated with a red color.
- "default/undefined/null" status is indicated with a gray color and the text "N/A."

The "Preview" column provides interactive functionality:

- If there is no active session (recording or recorded), the modal does not open as there is no video to show.

An open eye icon (green) is displayed and clickable, which opens a modal showing a preview of the "video_example.mp4" video. The modal also includes a title with the team's name.

A closed eye icon (red) is displayed and NOT clickable.

### Pagination:

The team list is paginated with a maximum of 10 elements per page. 

Pagination controls are provided to navigate between pages and view different sections of the team list.

### Loader Animations:

Loader animations are implemented throughout the application to enhance the user experience.

These animations are displayed during loading states, ensuring a visually appealing experience even if there is no significant wait time.

## Technologies Used
The web application utilizes the following technologies and tools:

- React: A JavaScript library for building user interfaces.
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
- HTML/CSS: Standard web technologies for markup and styling.
- React Modal: A popular React library for creating modals and pop-ups.
- React Icons: A collection of popular icons as React components.
- React Router: A library for handling routing within a React application.
- Loader CSS: A library for easily adding loader animations to web applications.
