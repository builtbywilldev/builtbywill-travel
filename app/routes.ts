import { type RouteConfig, route, layout } from "@react-router/dev/routes";

export default [
    
    route('sign-in', 'routes/root/sign-in.tsx'),
    layout('routes/admin/admin-layout.tsx',[
    route('dashboard', 'routes/admin/dashboard.tsx'),
    route('all-users', 'routes/admin/all-users.tsx'),
    route('trips', 'routes/admin/trips.tsx'),
    route('trips/create', 'routes/admin/Create-trip.tsx'),
    route('trips/:id', 'routes/admin/trip-details.tsx'),
    route('/', 'routes/admin/home.tsx'),

    ])

] satisfies RouteConfig;