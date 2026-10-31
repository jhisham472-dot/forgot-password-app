# Forgot Password page

Standalone Vite + React project for the Forgot Password page.

```
npm install
npm run dev
```

Then open the address Vite prints (it redirects to `/forgot-password`).

To move it into the main project: copy `src/components/ForgotPassword/` into the main
app's `src/components/` and add this route in `App.jsx`:

```jsx
<Route path="/forgot-password" element={<ForgotPassword/>}/>
```

The "Back to Login" button navigates to `/login`, which only exists in the main app.
`src/index.css` is a small reset shared with the main app.
