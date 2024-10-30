# playwright-typescript-chi

Clone the project and run locally using below commands

Run test using the command below

    npx playwright test
    

npx playwright test --ui

    Starts the interactive UI mode.

Test Plan for Saucelabs
Test Plan ID - v1
Prepared by: Swapna
# Introduction
Purpose: To define the scope, objectives, and approach for testing the shopping website.
Objective: Ensure the website’s functionality, performance, security, and usability meet the specified requirements for a smooth shopping experience.

# Scope
In-Scope: Functionalities directly related to the shopping experience, such as product search, browsing, shopping cart, checkout, user accounts, payment, and order management.
Out-of-Scope: External integrations (e.g., third-party payment gateways) are considered out-of-scope but may be subject to integration testing if required.

# Testing Objectives
Verify that users can perform key actions such as browsing products, adding items to the cart, checking out, and making payments without issues.
Ensure that the website operates securely, efficiently, and consistently across devices and browsers.
Validate that the shopping experience meets the user’s expectations for usability and responsiveness.

# Test Items

Index page - Login with different users, check the authorisations for different users.
Product Search and Filters - can filter by name, price
Product Details - name, price and picture is available, add product, remove product, checkout
Shopping Cart - reset cart once logged out and different login users
User Account (Login, Profile Management)
Checkout Process - Items added to cart are in stock, Checkout items are saved for later time to process
Payment Processing - Payment can be processed for items added to cart, invalid cart details rejected

Reviews and Ratings
# Features to be Tested
Home Page: Navigation, featured products, promotions, and categories display.
Product Search and Filters: Search functionality, filtering, and sorting.
Product Details Page: Information accuracy, images, options, and availability.
Shopping Cart: Add, remove, update, apply discount codes.
Checkout: Shipping information, payment methods, summary, and order confirmation.
User Account: Registration, login, logout, and profile updates.
Payment: Secure payment process, payment options, payment confirmation.
Order Management: Order status updates, tracking, cancellation, and history.
Wishlist: Add to wishlist, remove, and transfer items to cart.
Reviews and Ratings: Adding, editing, viewing, and reporting reviews.

# Features Not to be Tested
Integration with external analytics or tracking tools.
Backend database testing.

# Assumptions and Dependencies
All features specified in the requirements are fully implemented and functional.
Required test environment, including hardware, software, and network configurations, is available.
Necessary credentials for test accounts, access to staging/production databases, and integration with third-party services are provided.

Testing Strategy
Test Levels:

Unit Testing: Performed by developers for individual modules.
Integration Testing: Testing interactions between modules, particularly for cart and payment processing.
System Testing: Validating the complete website functionality.
Acceptance Testing: Ensuring the website meets business requirements.
Types of Testing:

Functional Testing: Testing all user flows and interactions.
Usability Testing: Validating the site’s design and user-friendliness.
Compatibility Testing: Testing on different browsers, devices, and OS versions.
Performance Testing: Checking load times, response times, and scalability.
Security Testing: Ensuring data protection, secure transactions, and restricted access to sensitive pages.
Accessibility Testing: Ensuring website is WCAG complaint.

# Test Environment
Operating Systems: Windows, macOS, Android, iOS.
Browsers: Chrome, Firefox, Safari, Edge.
Devices: Desktop, Tablet, and Mobile.
Test Data: Dummy user accounts, sample products, test payment details, and discount codes.

# Test Deliverables
Test Plan Document
Test Cases and Test Scripts
Test Execution Report
Bug/Defect Report
Test Summary Report
Traceability Matrix

# Entry and Exit Criteria
Entry Criteria:

Test plan and test cases are reviewed and approved.
All necessary test environments are set up and stable.
Required test data is prepared and accessible.
Exit Criteria:

All critical and high-priority test cases are executed.
No critical or high-priority defects remain open.
Test Summary Report is prepared and shared with stakeholders.

# Roles and Responsibilities
Depends on team structure

# Defect Management
All defects will be tracked in [Defect Tracking Tool, e.g., JIRA].
Defects will be categorized by severity (e.g., Critical, High, Medium, Low).
Each defect will be assigned an owner, status, and priority for resolution.

# Risk Management
Risks: Delay in environment setup, changes in requirements, and dependencies on third-party systems.
Mitigation Strategies: Early setup of environments, close communication with stakeholders, and contingency plans.
