#full-stack-task-management-app

#Setup instructions for both the front-end, back-end and Admin.
1. The project is structured into three main areas: the backend, frontend, and admin panel. Each area has its respective setup instructions and dependencies.
2. The backend handles the API and data processing, while the frontend and admin areas manage the user interface and admin control panel.
3. During development, a key challenge was ensuring smooth communication between the frontend and backend, especially while handling user authentication and data management.
4. The use of environment variables for sensitive configurations was essential to keeping the project secure and scalable.


#Backend Setup
Root Directory: backend
Installation Command : npm install
Start Command: node server.js
Environment Variables: Ensure you have the necessary environment variables set for the backend to function properly. This may include database configurations, API keys, and other sensitive data.


# Frontend Setup
Root Directory: frontend
Build Command: npm install; npm run build
Publish Directory: The build output will be generated in the ./dist directory. Ensure this is set up correctly for deployment.


# Admin Setup
Root Directory: admin
Build Command: npm install; npm run build
Publish Directory: The build output will be generated in the ./dist directory. Ensure this is set up correctly for deployment.



#Project Description: FoodFlow
FoodFlow is a full-stack food delivery application developed using the MERN stack (MongoDB, Express, React, Node.js). The platform allows users to order food, track their deliveries, and make payments securely using Indian card numbers. It provides a rich, dynamic user experience with features like menu exploration, filtering options, and adding quantities to the cart.

The project is powered by a robust backend with MongoDB Atlas for data storage and various technologies like JWT for authentication, Stripe for payments, and more. The frontend is built using React, ensuring a responsive and interactive design.

#Features:
1. User Authentication:
   Sign up and login functionality using JWT-based authentication.
2. Food Ordering:
   Users can browse a detailed menu, filter options, and select food items.
   Quantity selection for each item in the cart.
3. Order Tracking:
   Real-time order tracking to monitor delivery status.
4. Payment Integration:
   Integration with Stripe for secure payments using Indian card numbers.
5. Admin Panel:
   Admin users can manage the menu, view orders, and perform administrative tasks.
6. Menu Exploration:
   Users can explore the menu with filter options to refine their search.
7. Custom APIs:
   Created custom APIs to handle CRUD operations for food items, user data, and orders.
8. Responsive Design:
   Built with React for a responsive, mobile-friendly interface.


#Assumptions
1. Payment Integration: Assumed that users would have valid Indian card details for the payment process, and thus, the Stripe integration was focused on that.
2. Admin Role: Assumed that only authorized admins would have access to the admin panel for managing menus and orders.
3. Internet Connectivity: Assumed that users have a stable internet connection forpayment processing.

#Challenges
1. Payment Integration: Integrating Stripe for secure payments, especially with Indian card numbers, posed challenges regarding regional compatibility and API integration.
2. User Authentication: Ensuring secure sign-ups and logins, particularly with JWT and password hashing using bcrypt, was tricky at first.
3. Frontend Design: Ensuring a responsive UI across multiple devices required constant testing and adjustments in CSS and React components.
4. API Optimization: Ensuring smooth data flow between the frontend and backend while creating custom APIs for menu management, orders, and users required optimizing the server-side performance.
   
#Limitations
1. Regional Payment Support: Only Indian card payments are supported, limiting the global reach of the app.
2. Admin Panel Limitations: The admin panel could be further expanded with more features like reporting, advanced analytics, and user management.




