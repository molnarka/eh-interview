

### Overview

We’d like you to **fork** this repository, build E2E tests on a **feature branch** in your fork, and then submit a **pull request (PR)** from that fork back to the original repository. This mirrors a real open-source / collaboration workflow, and helps us evaluate how you work.

---


## Context & Goal

This repository is a **sample Angular app** demonstrating advanced Angular techniques (store / facade, signals, standalone components, etc.).
Your task is to create **end-to-end (E2E) QA tests** for key user flows, integrate them into CI via GitHub Actions, and provide a clean PR with all your test work.

We’ll assume you use **VS Code**, and you may use **Docker** / dev container if helpful (there’s a `.devcontainer` in the repo).

---

## Setup / Prerequisites

1. **Clone the repo**  


2. **Run the app locally**

   ```bash
   npm start
   ```

   Confirm that the app launches (likely on `http://localhost:4200`).

3. **Decide on a test framework**
   Use a browser automation tool that supports dialog handling (confirm, prompt), e.g. **Playwright** or **Cypress**.

4. **Set up your test directory**
   Create a folder (e.g. `e2e/`, `tests/`, or `qa/`) where you will put your E2E test code.

---

## Task List

Here are the QA automation tasks you should implement:

### 1. Header Navigation / Routing Test

* Write a test that verifies the main navigation (header) has the **correct tabs or routes** (for example: *Signal*, *Facade*, *Solid*, etc.—based on how the app is structured).
* For each tab / navigation item: click it → verify that the right component or page is loaded.

**Acceptance Criteria:**

* All expected navigation tabs/routing links are present.
* Navigating via each tab shows the correct content / component.

---

### 2. Signal Sample Page — Todo via JS Prompt

* Navigate to the **Signals Sample** page.
* Simulate adding two todo items via JS prompt: for example, `TODO_1` and `TODO_2`.

  * When you click “Add”, a prompt should appear.
  * Enter the todo text into the prompt.
* After adding both todos:

  * Assert that both appear in the list.
  * Assert the order is exactly `TODO_1` then `TODO_2`.

**Acceptance Criteria:**

* Prompt appears on “Add”.
* Entered text is correctly added.
* Todos appear in correct order.

---

### 3. Facade Page — User Deletion and Cancellation

* Navigate to the **Facade** page in the app. Based on the repo, there is a “users” feature / state.
* Locate a specific user (choose one for test, e.g. **Lily Lee**, if names are known).
* Trigger the deletion of that user.
* When a confirmation dialog pops up, **click Cancel**.
* After cancelling, verify that the user is still present (i.e., not deleted).

**Acceptance Criteria:**

* Deletion confirmation dialog appears.
* On cancel, the target user remains in the list.

---

### 4. Facade Page — Confirm Deletion of a User

* Similarly, pick a user (like **Henry Hill**, or another if more appropriate).
* Trigger the delete action.
* Accept the confirmation dialog.
* Assert that the user is removed from the list afterward.

**Acceptance Criteria:**

* Confirmation dialog appears when delete is triggered.
* On confirming, the user is removed from the UI.

---

### 5. User Detail Card / View Validation

* On the **Facade** page (or a dedicated “Details” view / component), navigate to / open the *details* for a specific user, e.g. **Ava Taylor**.
* Verify that the details card / component displays the correct user properties (e.g., name, email, other fields present in this sample app).

**Acceptance Criteria:**

* The user details view is accessible.
* Displayed data matches expected values for the user.

---

## GitHub Actions / CI Integration

* Setup a GitHub Actions workflow that runs on **Pull Request**.
* Workflow should perform:

  1. `actions/checkout` to get your branch code.
  2. `npm ci` (or `npm install`) to install dependencies.
  3. Start the Angular app (e.g. `npm start`), or serve a production build (or use a lightweight http‐server after build) so that the tests can run against it.
  4. Run your E2E test suite.
  5. Fail the workflow if any test fails.

**Important Notes:**

* Make sure to wait / check that the app is ready before running tests.
* Use appropriate settings and logic in your tests so they aren’t flaky.

---

## Documentation & Reporting

* Update the **README.md** (or add a new “QA / E2E Testing” section) to instruct future developers on:

  * How to run the tests locally.
  * How to debug failed tests.
  * Any environment configuration (ports, base URL) needed.

* In your **Pull Request**, clearly document:

  * What tests you added, and what they cover.
  * Any assumptions or hard-coded values (e.g. specific user names).
  * How to run the tests locally.
  * How the CI workflow works.

---

## Quality Expectations

* Write **clean, maintainable test code**.
* Tests should be **idempotent**.
* Use descriptive names for your test cases (e.g., `shouldDisplayCorrectUserDetails_whenNavigatingToUserDetail`).
* Handle browser dialogs robustly (prompts / confirms).
* Optionally, capture screenshots or video on test failure (if supported by your tooling).

---

## Deliverables

1. E2E test files / directory in the repo (or committed in your branch)
2. GitHub Actions workflow file for running tests on PRs
3. Updated documentation / README with test instructions
4. A **Pull Request** back to the `angular-advanced-sample` repo with your completed tasks

---

## Bonus (Optional)

* Generate a test report (JUnit, HTML, or similar) for CI.


