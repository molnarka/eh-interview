
# Task: Build an Automated Testing Framework and Integrate with CI/CD

## Objective
Create an **automated testing framework** for the project at https://github.com/cZalyun/angular-advanced-sample that ensures continuous quality checks and integrates seamlessly into a CI/CD pipeline.

---

## Requirements

### 1. Testing Framework Setup
- Choose appropriate tools and libraries (e.g., **Jest**, **Cypress**, **Playwright**, **Testing Library**).
- Implement:
  - **Unit tests** (components, services).
  - **Integration tests** (complex component interactions).
  - **End-to-End tests** (user flows).
- Ensure **code coverage measurement** (coverage reports).
- Design a **maintainable and scalable project structure** that supports long-term growth.

### 2. CI/CD Integration
- Configure a **GitHub Actions workflow** that:
  - Runs all tests on every pull request and commit to the main branch.
  - Generates coverage reports.
  - Uses caching for dependencies to optimize speed.
  - Blocks merges if tests fail.
- *(Bonus)* Demonstrate how you would integrate test execution into a **Docker-based pipeline**.

### 3. Reporting and Quality Assurance
- Generate **HTML-based test reports**.
- Include **code coverage reporting**.
- *(Bonus)* Integrate **static code analysis** (e.g., SonarQube) or linting.

### 4. Documentation
- Provide a concise document that includes:
  - Rationale for chosen tools.
  - Overview of the testing framework structure.
  - Explanation of CI/CD configuration.
  - Instructions for running tests locally and in the pipeline.

---

## Evaluation Criteria
- **Architectural Thinking**: Is the solution well-structured and scalable?
- **Depth of Automation**: Includes unit, integration, and E2E tests.
- **CI/CD Quality**: Workflow optimization and error handling.
- **Documentation**: Clarity and completeness.
- **Code Quality**: Clean, maintainable implementation.

---

### Bonus Points
- Docker-based pipeline integration (+5)
- Advanced mocking and test data management (+5)

