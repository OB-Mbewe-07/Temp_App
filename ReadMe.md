Building a **TemperatureConverter** is the classic "rite of passage" for mastering React state. It moves you past simple counters and into the territory of data flow and synchronization.

Here are the requirements for your project, structured to ensure you hit those specific learning milestones.

---

## 1. Core Functionality: The Converter

The goal is to create two inputs (Celsius and Fahrenheit) that stay perfectly in sync.

* **Lifting State:** Neither input component should hold its own local state for the temperature value. State must live in a common parent (`TemperatureConverter`).
* **Controlled Components:** Both inputs must be "controlled," meaning their value is driven by React state and updated via an `onChange` handler.
* **Two-Way Synchronization:** * Updating Celsius must immediately update Fahrenheit.
* Updating Fahrenheit must immediately update Celsius.



### The Conversion Logic

Use these standard formulas for your utility functions:

* **Celsius to Fahrenheit:** $F = C \times \frac{9}{5} + 32$
* **Fahrenheit to Celsius:** $C = (F - 32) \times \frac{5}{9}$

---

## 2. State Structure & Principles

To maintain a **Single Source of Truth**, you must follow the 5 principles of state structure:

1. **Group related state:** If you find yourself updating two state variables at the same time, consider if they should be one.
2. **Avoid contradictions:** Don't store both `celsius` and `fahrenheit` in state. If you change one and forget to update the other, the UI breaks.
3. **Avoid redundant state:** If you can calculate a value from props or existing state during render, **do not** put it in state.
4. **Avoid duplication:** Don't mirror props in state unless you specifically need to ignore future updates.
5. **Avoid deeply nested state:** Keep it flat for easier updates.

> **The Requirement:** Store only the `temperature` (string) and the `scale` ('c' or 'f') in the parent state. Everything else should be a **computed/derived value**.

---

## 3. Team Directory (Filtering Extension)

Once the converter is functional, you will add a **Team Directory** section to practice lifting state for filtering purposes.

* **The Data:** A hardcoded array of objects (e.g., `[{ id: 1, name: 'Alice', role: 'Dev' }]`).
* **The Filter Input:** A search box component that accepts a `filterText` prop.
* **The List:** A display component that receives the *filtered* list.
* **The Logic:** * The parent component holds the `query` state.
* The parent calculates the `filteredEmployees` array on every render based on that `query`.
* **Constraint:** Do not store the "filtered list" in state. It must be a **computed value**.



---

## 4. Technical Specifications Table

| Feature | Requirement | Why? |
| --- | --- | --- |
| **Inputs** | Custom `<TemperatureInput />` component used twice. | Component reusability. |
| **State Location** | The nearest common ancestor. | Implements "Lifting State Up." |
| **Data Flow** | Downwards via props; Upwards via callbacks. | Unidirectional data flow. |
| **Calculations** | Done during the render body (not in `useEffect`). | Ensures UI is always in sync with state. |
| **Boilerplate** | Use `create-react-app` or `Vite`. | Standard development environment. |

---

## 5. Summary of "Good State" Implementation

To verify your work, check against these constraints:

* [ ] Is there any `useState` inside the individual Input components? (There shouldn't be).
* [ ] If you change the Celsius formula, does the Fahrenheit input update automatically without extra state setters? (It should).
* [ ] Is the "Filtered Team List" stored in its own `useState`? (It shouldn't be; it should be derived from `employees` and `searchQuery`).