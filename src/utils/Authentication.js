export const tryLogin = (email, password, success, fail) => {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find((u) => u.id === email && u.password === password);
  if (user) {
    success(user);
  } else {
    fail('Invalid credentials');
  }
};

export const tryRegister = (email, password, success, fail) => {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const userExists = users.some((u) => u.id === email);
  if (userExists) {
    fail('User already exists');
  } else {
    users.push({ id: email, password });
    localStorage.setItem('users', JSON.stringify(users));
    success();
  }
};
