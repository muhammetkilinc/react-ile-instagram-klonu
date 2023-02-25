import AuthLayout from "./pages/auth";
import MainLayout from "./pages/layout";
import Home from "./pages/home";
import ProfileLayout from "./pages/profile";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import PrivateRoute from "./components/PrivateRoute";
import ProfilePosts from "./pages/profile/posts";
import ProfileTagged from "./pages/profile/tagged";

//const { default: Home } = require("./pages/home");

const routes = [
    {
        path: '/',
        element: <MainLayout />,
        auth: true,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: ':username',
                element: <ProfileLayout />,
                children: [
                    {
                        index: true,
                        element: <ProfilePosts />
                    },
                    {
                        path: ':tagged',
                        element: <ProfileTagged />
                    },
                ]
            },
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
        ]
    }
]

const authCheck = routes => routes.map(route => {
    if (route?.auth) {
        route.element = <PrivateRoute>{route.element}</PrivateRoute>
    }
    if (route?.children) {
        route.children = authCheck(route.children)
    }
    return route
})

export default authCheck(routes);