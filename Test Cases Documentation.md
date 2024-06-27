# Zombie+ (Regression Tests)

The planned test cases aim to test the functionalities and ensure the quality of the Zombie+ software. Each specific test case is designed to verify a particular scenario within the system, and the overall purpose of the tests is to ensure the software functions as expected, meeting business requirements and providing a reliable user experience.

## Landing Page

The tests in this set verify the functionality of lead registration and authentication in the waitlist, ensuring that leads can register successfully and that authentication works correctly.

### Waitlist (Leads)

- **Valid Registration**
  - **Action:** Fill in all required fields (name and email) with valid information and click "Register".
  - **Expected Result:** The lead is successfully registered in the system.
- **Registration with Blank Fields**
  - **Action:** Leave the name and/or email fields blank and click "Register".
  - **Expected Result:** An error message is displayed, indicating that required fields must be filled in.
- **Registration with Invalid Email Format**
  - **Action:** Fill in the email field with an invalid format and the name field correctly, then click "Register".
  - **Expected Result:** An error message is displayed, indicating that the email format is invalid.

### Authentication (Login)

- **Login with Valid Credentials**
  - **Action:** Enter a registered user's valid email and password and click "Login".
  - **Expected Result:** The user is redirected to the logged-in area of the system.
- **Login with Invalid Email**
  - **Action:** Enter an invalid email and a valid password and click "Login".
  - **Expected Result:** An error message is displayed, indicating that the email is invalid.
- **Login with Incorrect Password**
  - **Action:** Enter a valid email and an incorrect password and click "Login".
  - **Expected Result:** An error message is displayed, indicating that the password is incorrect.
- **Login with Unregistered User**
  - **Action:** Enter an unregistered email and a password and click "Login".
  - **Expected Result:** An error message is displayed, indicating that the user is not registered in the system.

# Admin

These tests aim to validate the operations of registering, searching, and deleting movies and series in the system administration. They ensure that data is stored correctly, searches return accurate results, and content deletion is performed smoothly.

## Movie Management

### Registration

- **Valid Movie Registration**
  - **Action:** Fill in all required fields in the movie registration form with valid information and click "Register".
  - **Expected Result:** The movie is successfully registered in the system.
- **Movie Registration with Blank Fields**
  - **Action:** Leave at least one required field blank and click "Register".
  - **Expected Result:** An error message is displayed, indicating that required fields must be filled in.
- **Duplicate Series Registration**
  - **Action:** Fill in the form with information of an already registered series and click "Register".
  - **Expected Result:** An error message is displayed, indicating that the series is already registered in the system.
- **Featured Content Registration**
  - **Action:** Fill in all required fields and mark the movie as featured.
  - **Expected Result:** The movie marked as featured is displayed on the landing page.

### Search

- **Search for Movies**
  - **Action:** Perform a search by the title of an existing movie.
  - **Expected Result:** A list of movies matching the search criteria is displayed.
- **Search Term Not Found**
  - **Action:** Perform a search by the title of a movie that does not exist.
  - **Expected Result:** An error message is displayed, indicating that no data was found for the search term.

### Deletion

- **Delete Movie**
  - **Action:** Select a movie from the list and click "Delete".
  - **Expected Result:** The movie is successfully removed from the system.

## Series Management

### Registration

- **Valid Series Registration**
  - **Action:** Fill in all required fields in the series registration form with valid information and click "Register".
  - **Expected Result:** The series is successfully registered in the system.
- **Duplicate Series Registration**
  - **Action:** Fill in the form with information of an already registered series and click "Register".
  - **Expected Result:** An error message is displayed, indicating that the series is already registered in the system.
- **Series Registration with Blank Fields**
  - **Action:** Leave at least one required field blank and click "Register".
  - **Expected Result:** An error message is displayed, indicating that required fields must be filled in.
- **Featured Content Registration**
  - **Action:** Fill in all required fields and mark the series as featured.
  - **Expected Result:** The series marked as featured is displayed on the landing page.

### Search

- **Search for Series**
  - **Action:** Perform a search by the title of an existing series.
  - **Expected Result:** A list of series matching the search criteria is displayed.
- **Search Term Not Found**
  - **Action:** Perform a search by the title of a series that does not exist.
  - **Expected Result:** An error message is displayed, indicating that no data was found for the search term.

### Deletion

- **Delete Series**
  - **Action:** Select a series from the list and click "Delete".
  - **Expected Result:** The series is successfully removed from the system.

## Lead Management

These tests focus on the functionality of lead management, including listing, searching, and deleting leads in the system. They ensure that lead data is displayed correctly, searches function properly, and leads can be removed as needed.

- **Search for Leads**
  - **Action:** Perform a search by the name of an existing lead.
  - **Expected Result:** A list of leads matching the search criteria is displayed.
- **Delete Lead**
  - **Action:** Select a lead from the list and click "Delete".
  - **Expected Result:** The lead is successfully removed from the system.
