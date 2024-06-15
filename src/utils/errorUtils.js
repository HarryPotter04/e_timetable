export function getErrorMessage(error) {
    return (
        error.response.data.errors[0] || error.response.data.error || error.response.data.errors ||
        (error.response &&
          error.response.data &&
          error.response.data.message && error.response.data.error ) ||
        error.message ||
        error.toString()
    );
}
