export const BASE_URL = "https://innovationcrud.azurewebsites.net/api";

const serverVars = {
  apiUrl: "https://innovationcrud.azurewebsites.net/api",
};

const localVars = {
  apiUrl: "https://innovationcrud.azurewebsites.net/api",
};

export function getConfiguration() {
  if (process.env.NODE_ENV === "production") {
    return serverVars;
  }

  return localVars;
}
