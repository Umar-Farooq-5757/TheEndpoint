function validateJSON(str) {
  try {
    const parsed = JSON.parse(str);
    return { valid: true, data: parsed };
  } catch (e) {
    return { valid: false, error: e.message };
  }
}

export default validateJSON;