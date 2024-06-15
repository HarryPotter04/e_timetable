export function getErrorMessage(error) {
  let errorMsg = "";
  if (error.response && error.response.data.error) {
    errorMsg = error.response.data.error[0];
  } else if (error.response && error.response.data.message) {
    errorMsg = error.response.data.message;
  } else if (error.response && error.response.data.detail) {
    errorMsg = error.response.data.detail;
  } else {
    errorMsg = error.message;
  }

    return errorMsg;
}
