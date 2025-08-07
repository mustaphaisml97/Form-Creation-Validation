// Step 1: Initialize the async function
async function fetchUserData() {
  // Step 2: Define the API URL
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  // Step 3: Select the data container
  const dataContainer = document.getElementById('api-data');

  // Step 4: Use try-catch for fetching
  try {
    // Step 4a: Fetch the data
    const response = await fetch(apiUrl);

    // Step 4b: Convert to JSON
    const users = await response.json();

    // Step 5: Clear loading message
    dataContainer.innerHTML = '';

    // Step 6: Create and populate user list
    const userList = document.createElement('ul');

    users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });

    // Step 7: Append the list to the container
    dataContainer.appendChild(userList);

  } catch (error) {
    // Step 8: Handle errors
    dataContainer.innerHTML = '';
    dataContainer.textContent = 'Failed to load user data.';
    console.error('Fetch error:', error);
  }
}

// Step 9: Call fetchUserData when DOM is ready
document.addEventListener('DOMContentLoaded', fetchUserData);
