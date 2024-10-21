# Algorithm visualizer

Algorithm visualizer is an Angular based web-application to learn about different (sort) algorithms visually.
This is a group project for the computer science classes at the DHBW.

# What will it be able to do?

- Visualize algorithms
- Feed it with custom arrays of data
- Select the speed of visualization

# Developer information

**Download the following software:**
- [Git](https://git-scm.com/downloads)
  - For further contribution, setup [GitHub SSH Authentication](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) and [create a fork](https://github.com/vKekz/Algorithm-Visualizer/fork)
- [NodeJS](https://nodejs.org/download/release/latest/)
- IDE (e.g. Visual Studio Code)

**Build the project:**
1. Install the [Angular-CLI](https://angular.dev/tools/cli/setup-local#install-the-angular-cli) & Prettier (executed in terminal)
    - `npm install -g @angular/cli`
    - `npm install -g prettier` (used as a formatter)
    - `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned` (Optional: If errors occur when running the web-app)
2. Clone the project to a selected location
    - `git clone https://github.com/vKekz/Algorithm-Visualizer.git`

**[!]** Following commands are executed from a terminal in the selected cloned location (`Algorithm-Visualizer` folder)
3. Navigate to the `algorithm-visualizer` sub-folder
4. Install dependencies
    - `npm install`
5. Run web-application
    - `ng serve --open` (optional: --open which opens the browser)