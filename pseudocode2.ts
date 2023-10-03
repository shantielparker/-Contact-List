//1. Import React and useState into App.jsx.
//2. Create state variables for selectedContactId and setSelectedContactId, with the default value of null.

//3. In the return statement, use a ternary operator to conditionally render components based on the selectedContactId.

//4. If selectedContactId is truthy (i.e., a contact is selected):
  // - Render a div with a message like "Selected Contact" or any desired content.
  // - Optionally, display contact details using the selectedContactId to retrieve data.

//5. If selectedContactId is falsy (i.e., no contact is selected):
 //  - Render the ContactList component, passing it the contacts data and setSelectedContactId as props.

//6. In the ContactList component, implement a click event handler for each contact row. When a contact is clicked, call setSelectedContactId with the contact's ID to update the selectedContactId state.

//7. In the ContactRow component, add an onClick event on the row itself or a specific element (e.g., the name or a button) to trigger the selection event. Pass the contact's ID to the event handler.

//8. When a contact is selected, setSelectedContactId will update the state, and the conditional rendering in App.jsx will switch to displaying the selected contact.

//9. Test your application by clicking on different contacts to see the selected contact's details or messages.

//10. Optionally, you can enhance the selected contact view by displaying more contact details and implementing any desired features.

//11. Ensure that the selected contact functionality is working as expected before proceeding to further improvements or features.