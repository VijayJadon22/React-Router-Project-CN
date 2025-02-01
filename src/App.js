import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from "./pages/app/details/Details";
import Learn from "./pages/app/learn/Learn";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/", element: <Nav />, // Main route rendering the Nav component
      children: [
        {
          path: "/", element: <Hero /> // Child route rendering the Hero component at the root path
        },
        {
          path: "/courses",
          children: [
            {
              index: true, // This is the index route for the /courses path
              element: <Courses /> // Renders the Courses component when the /courses route is matched and no specific child route is matched
            },
            {
              path: ":courseId",
              element: <Details /> // Dynamic route rendering the Details component for any courseId (e.g., /courses/123)
            }
          ]
        },
        { path: "/learn/:courseId", element: <Learn /> }
      ]
    }
  ]);



  return (
    <RouterProvider router={routes} />
  );
}

export default App;
