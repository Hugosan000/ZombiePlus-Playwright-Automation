# Zombie+ Streaming - Playwright Automation Scripts  <img src="https://seeklogo.com/images/P/playwright-logo-22FA8B9E63-seeklogo.com.png" alt="Playwright Logo" width="" height="30"> 


## Continuous Improvement

This project is not finished yet, so please be patient! We have several upcoming features planned, including:

- Transitioning from `JavaScript` to `TypeScript`
- Introducing more automated UI scenarios to enhance test coverage
- Automating CRUD operations
- Creating a Postman collection for API manual testing
- Adding mobile support
- And more!

Thank you for your patience as i continue to improve and expand this project.

![image](https://github.com/Hugosan000/ZombiePlus-Playwright-Automation/assets/61331185/693855f7-dff9-4495-9496-10d888660332)



### Overview
Zombie+ is a streaming platform designed specifically for zombies. It will be tested using the Playwright framework, incorporating both UI and API tests to provide comprehensive end-to-end (e2e) testing and ensure a high-quality experience for all users! The tests are written using Playwright, a Node.js library to automate Chromium, Firefox, and WebKit with a single API. The tests focus on the lead submission process, error handling, form validation, and user authentication.
![image](https://github.com/Hugosan000/ZombiePlus-Playwright-Automation/assets/61331185/e0abd30f-4de3-4fe7-964a-3039af705b70)


## Prerequisites
- Node.js installed on the machine.
- Playwright library installed in the project.
- The web application running locally or deployed to a test environment.
- To run it local make sure to use `npm run dev` in both **API** and **WEB** folder

  

## Installation
1. **Node.js**: Download and install Node.js from [nodejs.org](https://nodejs.org/).
2. **Playwright**: Install Playwright and its test runner by running:
   ```sh
   npm i -D @playwright/test
   ```


## Project Structure
Ensure the project follows a structured format, with a dedicated directory for pages (`/pages`) and tests (`/tests`).

## Test Setup
The tests utilize a Page Object Model (POM) design pattern to abstract the interactions with the web application. This approach enhances test maintenance and readability. The tests are structured using Playwright's test object, with a `beforeEach` hook to initialize the page objects before each test.

### Page Objects
- **LandingPage**: Represents the landing page of the application with methods to interact with the lead form.
- **Toast**: Represents the toast notifications for displaying messages.
- **LoginPage**: Encapsulates the login page's UI elements and interactions.
- **MoviesPage**: Represents the post-login page to verify successful authentication.

  
### Initialization
Before each test, page objects are instantiated with a reference to the Playwright page object, providing a fresh setup for each test scenario.

## Test Cases
Given the extensive nature of the test suite, a dedicated document has been created to explain the tests conducted using the Test Cases format for better comprehension. Please refer to this document for detailed information.

![image](https://github.com/Hugosan000/ZombiePlus-Playwright-Automation/assets/61331185/ea7fc0f6-0474-4599-9b2c-c44a099e826d)

## Running the Tests
To run the tests, execute the following command in the terminal. Ensure you are in the project root directory before running the command:

```sh
npx playwright test
```

This command runs all tests using UI mode so can help you to see the magic happening in the backdoors

```sh
npx playwright test tests/login.spec.js
```
![image](https://github.com/Hugosan000/ZombiePlus-Playwright-Automation/assets/61331185/e442555d-078f-4ca4-a552-c9b30f1f6e1a)

# Why using Playwright and not other framework for this App?

Using Playwright to test Zombie+ offers numerous benefits:

1. **Automated Cross-Browser Testing**
   - **Benefit:** Supports testing across Chrome, Firefox, and Safari.
   - **Impact:** Ensures Zombie+ functions correctly across major browsers, providing a consistent user experience.

2. **End-to-End Testing**
   - **Benefit:** Conducts comprehensive end-to-end (E2E) tests.
   - **Impact:** Validates the entire application workflow, ensuring seamless functionality.

3. **Headless Testing**
   - **Benefit:** Supports headless mode for faster, resource-efficient testing.
   - **Impact:** Speeds up test execution and optimizes resources in CI/CD pipelines.

4. **Robust API Testing**
   - **Benefit:** Handles API requests and responses alongside UI testing.
   - **Impact:** Ensures both frontend and backend of Zombie+ are thoroughly tested.

5. **Highly Reliable and Fast**
   - **Benefit:** Designed for reliability and speed.
   - **Impact:** Reduces test flakiness, provides faster feedback, and stable builds.

6. **Multi-Platform Support**
   - **Benefit:** Runs tests on Windows, macOS, and Linux.
   - **Impact:** Tests Zombie+ in diverse environments, catching platform-specific issues early.

7. **Advanced Features**
   - **Benefit:** Includes network request interception, screenshots, and video recording.
   - **Impact:** Facilitates detailed debugging and comprehensive test analysis.

8. **Parallel Test Execution**
   - **Benefit:** Executes tests concurrently.
   - **Impact:** Drastically reduces testing time, accelerating development cycles.

9. **Rich Documentation and Community Support**
   - **Benefit:** Comprehensive documentation and active community.
   - **Impact:** Supports learning and troubleshooting effectively.

10. **Integration with CI/CD Pipelines**
    - **Benefit:** Seamless integration with Jenkins, GitHub Actions, and Azure DevOps.
    - **Impact:** Automates testing within deployment pipelines, ensuring thorough pre-production testing.

By leveraging Playwright, Zombie+ achieves high-quality software with fewer bugs, faster releases, and enhanced user experiences.
