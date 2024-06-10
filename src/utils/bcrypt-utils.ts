import * as bcrypt from 'bcrypt';

/**
 * Hashes a plaintext password using bcrypt.
 *
 * @param {string} password - The plaintext password to be hashed.
 * @param {number} [saltRounds=10] - The number of rounds to use when generating the salt. Defaults to 10.
 * @returns {Promise<string>} A promise that resolves to the hashed password.
 */
export async function hashPassword(
  password: string,
  saltRounds: number = 13,
): Promise<string> {
  // Generate a salt with the specified number of rounds (default is 10)
  const salt = await bcrypt.genSalt(saltRounds);

  // Hash the password with the generated salt
  const hashedPassword = await bcrypt.hash(password, salt);

  // Return the hashed password
  return hashedPassword;
}

/**
 * Compares a plaintext password with a hashed password.
 *
 * @param {string} password - The plaintext password to be compared.
 * @param {string} hashedPassword - The hashed password to compare against.
 * @returns {Promise<boolean>} A promise that resolves to true if the passwords match, and false otherwise.
 */
export async function comparePassword(
  password: string,
  hashedPassword: string,
): Promise<boolean> {
  // Use bcrypt to compare the plaintext password with the hashed password
  const isMatch = await bcrypt.compare(password, hashedPassword);

  // Return the result of the comparison
  return isMatch;
}
