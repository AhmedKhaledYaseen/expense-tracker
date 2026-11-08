# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Individual users tracking personal expenses. Employees submit expenses (Travel, Food, Supplies, Entertainment, Other) with amounts in EGP (E£), dates, and notes. Admins review, approve, or reject submissions and access analytics.

## Product Purpose
A team expense tracker that lets individuals log expenses and admins manage approval workflows, audit trails, and spending insights. Success means fast expense submission, clear approval status, and useful spending analytics for admins.

## Positioning
Lightweight MERN-stack expense tracker with role-based access (Employee/Admin), audit logging, and category-based analytics — simple enough for small teams without enterprise overhead.

## Operating Context
Used in a browser on desktop and mobile. Employees create expenses from a form and view their own on a dashboard. Admins access a filterable panel of all expenses, approve/reject them, review audit logs, and view insights (bar chart by category, line chart by month).

## Capabilities and Constraints
- Auth: JWT-based login/register with role selection (Employee/Admin).
- Expenses: Create with category, amount (EGP), date, notes. No edit or delete.
- Admin: Filter all expenses by status/category/user/date range. Approve/reject. Export CSV.
- Insights: Category-wise bar chart, monthly trend line chart (Recharts).
- Audit Logs: Action history with user/target/timestamp/details.
- No pagination, no dark mode, no edit/delete expense, no server-side analytics.

## Brand Commitments
- Name: TeamExpenseTracker
- Author: Ahmed Khaled

## Evidence on Hand
No real user data, testimonials, or case studies. Screenshots exist in /screenshots/ directory.

## Product Principles
1. Submission speed — expense logging should take seconds, not minutes.
2. Approval clarity — status is always visible and unambiguous.
3. Transparent audit trail — every action is logged and reviewable.
4. Simple over feature-rich — small teams need less, not more.
5. Role-appropriate views — employees see their own; admins see everything.

## Accessibility & Inclusion
No specific requirements established beyond MUI defaults.

