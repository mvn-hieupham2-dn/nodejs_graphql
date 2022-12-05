import { RegisterInput } from "../../types/RegisterInput";

export const validateInput = (registerInput: RegisterInput) => {
  if (!registerInput.email.includes("@")) {
    return {
      message: "Invalid Email",
      error: [{ filed: "email", message: "Email must include @ symbol" }],
    };
  }
  if (registerInput.username.length < 3) {
    return {
      message: "Invalid username",
      error: [
        { filed: "username", message: "User must lease than 3 character" },
      ],
    };
  }
  return null
};
