/**
 * Input validation utilities
 */

/**
 * Validates required field
 * @param value - Value to check
 * @returns Boolean indicating if value is not empty
 */
export const isRequired = (value: string | null | undefined): boolean => {
  return value !== null && value !== undefined && value.trim() !== '';
};

/**
 * Validates email format
 * @param email - Email to validate
 * @returns Boolean indicating if email is valid
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates minimum length
 * @param value - Value to check
 * @param minLength - Minimum required length
 * @returns Boolean indicating if value meets minimum length
 */
export const hasMinLength = (value: string, minLength: number): boolean => {
  return value.length >= minLength;
};

/**
 * Validates maximum length
 * @param value - Value to check
 * @param maxLength - Maximum allowed length
 * @returns Boolean indicating if value doesn't exceed maximum length
 */
export const hasMaxLength = (value: string, maxLength: number): boolean => {
  return value.length <= maxLength;
};
