# Design System

<!-- impeccable:design-schema 1 -->

## Visual Identity

### Colors
- **Primary**: MUI default blue (`#1976d2`) — used on AppBar, buttons, links
- **Background**: Light gray (`bg-gray-100` / `#f5f5f5`) — page backgrounds and footer
- **Surface**: White (`#fff`) — Paper/Card components
- **Text Primary**: MUI default (`rgba(0,0,0,0.87)`)
- **Text Secondary**: MUI default (`rgba(0,0,0,0.6)`)
- **Status Green**: Used for Approved status and Approve buttons
- **Status Red**: Used for Rejected status and Reject buttons
- **Status Gray**: Used for Pending status

### Typography
- **Font**: MUI default (Roboto via system fallback)
- **Headings**: `variant="h5"` with `fontWeight: "bold"` — page titles
- **Subheadings**: `variant="h6"` — card titles, section labels
- **Body**: `variant="body1"` / `variant="body2"` — content text, footer
- **No custom font imports or overrides**

### Layout
- **Shell**: Flex column, min-h-screen (Header → main content → Footer)
- **Content width**: No explicit max-width on pages (fills container)
- **Card grids**: Responsive grid (`grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4`)
- **Forms**: Centered, max-w-md Paper with p-8 padding
- **Spacing**: MUI `mb`, `mt`, `gap` props + Tailwind `p-6`, `gap-4`

### Surfaces
- **Elevation**: MUI Paper `elevation={3}` for forms, default Card elevation for lists
- **Corners**: MUI default border-radius (4px)
- **Borders**: None explicit — relies on elevation shadows
- **Footer**: Flat `#f5f5f5` background, no shadow

### Components
- **AppBar**: Static position, default MUI blue, wrapping toolbar
- **Cards**: MUI Card/CardContent — unstyled beyond defaults
- **Buttons**: MUI Button `variant="contained"` primary, text buttons for nav
- **Forms**: MUI TextField, Select — full width, stacked vertically with Box mb={3} spacing
- **Icons**: MUI Icons — used in nav (mobile), user info, password toggle

### Interaction
- **Loading**: Tailwind spinner (Loader.jsx) and MUI CircularProgress
- **Feedback**: react-hot-toast at top-center
- **Navigation**: React Router with MUI Button/IconButton as RouterLink
- **Mobile**: useMediaQuery switches nav buttons → icon buttons at md breakpoint

## Incumbent Patterns
- Hybrid MUI `sx` prop + Tailwind utility classes for layout
- No MUI ThemeProvider — all defaults
- No dark mode
- No CSS custom properties or design tokens
- App.css contains unused Vite boilerplate (logo spin, etc.)
- index.css contains only `@import "tailwindcss"`

