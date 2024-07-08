export const checkValidatData = (userName, email, password) => {
  const userNameValue = /([a-zA-Z0-9_\s]+)/.test(userName);
  console.log(userNameValue);
  const emailValue = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const passwordValue =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!userNameValue) return "UserName is not valid";
  if (!emailValue) return "Email ID is not valid";
  if (!passwordValue) return "Password is not valid";

  return null;
};
