export const getToken = () => {
    try {
      return sessionStorage.getItem("token");
    } catch (e) {
      throw new Error("No token found");
    }
  };