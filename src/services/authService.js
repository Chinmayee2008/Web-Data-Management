// services/authService.js

const login = async (username, password) => {
    // Replace with your API endpoint
    const response = await fetch('https://your-api-url.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
  
    if (!response.ok) {
      throw new Error('Login failed');
    }
  
    const data = await response.json();
    // Assume the response includes a token you will need for authenticated requests.
    localStorage.setItem('token', data.token);
  
    return data;
  };
  
  export default login;
  