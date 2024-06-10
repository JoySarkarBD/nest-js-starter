class ValidationHelper {
  /**
   * Checks if a value is undefined.
   *
   * @param {any} value - The value to check.
   * @returns {boolean} - True if the value is undefined, false otherwise.
   */
  static isUndefined(value: any): boolean {
    return typeof value === 'undefined';
  }

  /**
   * Checks if a value is a string.
   *
   * @param {any} value - The value to check.
   * @returns {boolean} - True if the value is a string, false otherwise.
   */
  static isString(value: any): boolean {
    return typeof value === 'string';
  }

  /**
   * Checks if a value is a number.
   *
   * @param {any} value - The value to check.
   * @returns {boolean} - True if the value is a number, false otherwise.
   */
  static isNumber(value: any): boolean {
    return typeof value === 'number';
  }

  /**
   * Checks if a value is null or undefined.
   *
   * @param {any} value - The value to check.
   * @returns {boolean} - True if the value is null or undefined, false otherwise.
   */
  static isNullOrUndefined(value: any): boolean {
    return value === null || typeof value === 'undefined';
  }

  /**
   * Checks if a value is null.
   *
   * @param {any} value - The value to check.
   * @returns {boolean} - True if the value is null, false otherwise.
   */
  static isNull(value: any): boolean {
    return value == null;
  }

  /**
   * Checks if a value is an array.
   *
   * @param {any} value - The value to check.
   * @returns {boolean} - True if the value is an array, false otherwise.
   */
  static isArray(value: any): boolean {
    return Array.isArray(value);
  }

  /**
   * Checks if an array is empty.
   *
   * @param {any} value - The array to check.
   * @returns {boolean} - True if the array is empty, false otherwise.
   */
  static isEmptyArray(value: any): boolean {
    return Array.isArray(value) && value.length === 0;
  }

  /**
   * Checks if a value is empty (null, undefined, or an empty array).
   *
   * @param {any} value - The value to check.
   * @returns {boolean} - True if the value is empty, false otherwise.
   */
  static isEmpty(value: any): boolean {
    return value === null || value === undefined || value.length === 0;
  }

  /**
   * Checks if a string is a valid email.
   *
   * @param {string} value - The string to check.
   * @returns {boolean} - True if the string is a valid email, false otherwise.
   */
  static isEmail(value: string): boolean {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(value);
  }

  /**
   * Checks if a string is a valid date in YYYY-MM-DD format.
   *
   * @param {string} value - The string to check.
   * @returns {boolean} - True if the string is a valid date, false otherwise.
   */
  static isDate(value: string): boolean {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(value);
  }

  /**
   * Checks if a string represents a valid date.
   *
   * @param {string} value - The string to check.
   * @returns {boolean} - True if the string is a valid date, false otherwise.
   */
  static isValidDate(value: string): boolean {
    const date = new Date(value);
    return !isNaN(date.getTime());
  }

  /**
   * Checks if a string is a valid URL.
   *
   * @param {string} value - The string to check.
   * @returns {boolean} - True if the string is a valid URL, false otherwise.
   */
  static isURL(value: string): boolean {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(value);
  }

  /**
   * Checks if a string is a valid IP address (IPv4 or IPv6).
   *
   * @param {string} value - The string to check.
   * @returns {boolean} - True if the string is a valid IP address, false otherwise.
   */
  static isIPAddress(value: string): boolean {
    const ipv4Regex =
      /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    const ipv6Regex = /^(?:[A-F0-9]{1,4}:){7}[A-F0-9]{1,4}$/i;
    return ipv4Regex.test(value) || ipv6Regex.test(value);
  }

  /**
   * Checks if a file has a valid extension.
   *
   * @param {string} filename - The name of the file.
   * @param {string[]} extensions - The list of valid extensions.
   * @returns {boolean} - True if the file has a valid extension, false otherwise.
   */
  static isValidFileExtension(filename: string, extensions: string[]): boolean {
    const extension = filename.split('.').pop().toLowerCase();
    return extensions.includes(extension);
  }

  /**
   * Checks if two passwords match.
   *
   * @param {string} password - The password.
   * @param {string} confirmPassword - The password to confirm.
   * @returns {boolean} - True if the passwords match, false otherwise.
   */
  static isPasswordConfirmed(
    password: string,
    confirmPassword: string,
  ): boolean {
    return password === confirmPassword;
  }

  /**
   * Checks if a string is a valid JSON.
   *
   * @param {string} jsonString - The string to check.
   * @returns {boolean} - True if the string is a valid JSON, false otherwise.
   */
  static isValidJSON(jsonString: string): boolean {
    try {
      JSON.parse(jsonString);
      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * Checks if a value is an object.
   *
   * @param {any} value - The value to check.
   * @returns {boolean} - True if the value is an object, false otherwise.
   */
  static isObject(value: any): boolean {
    return typeof value === 'object' && value !== null;
  }

  /**
   * Checks if an object is empty (has no own properties).
   *
   * @param {any} obj - The object to check.
   * @returns {boolean} - True if the object is empty, false otherwise.
   */
  static isEmptyObject(obj: any): boolean {
    if (typeof obj !== 'object' || obj === null) {
      return false;
    }
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }
}

export default ValidationHelper;
