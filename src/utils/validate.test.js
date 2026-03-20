import { checkValidData } from '../utils/validate';

describe('Form Validation', () => {
  
  test('returns null for valid email and password', () => {
    const result = checkValidData('user@example.com', 'ValidPass123');
    expect(result).toBeNull();
  });

  test('returns error for invalid email', () => {
    const result = checkValidData('invalidemail', 'ValidPass123');
    expect(result).toBe('Email ID is not valid');
  });

  test('returns error for invalid password (less than 8 chars)', () => {
    const result = checkValidData('user@example.com', 'Pass12');
    expect(result).toBe('Password is not valid');
  });

  test('returns error for password without uppercase', () => {
    const result = checkValidData('user@example.com', 'password123');
    expect(result).toBe('Password is not valid');
  });

  test('returns error for password without lowercase', () => {
    const result = checkValidData('user@example.com', 'PASSWORD123');
    expect(result).toBe('Password is not valid');
  });

  test('returns error for password without number', () => {
    const result = checkValidData('user@example.com', 'PasswordQwerty');
    expect(result).toBe('Password is not valid');
  });

  test('accepts valid email formats', () => {
    const validEmails = [
      'test@domain.com',
      'user.name@example.co.uk',
      'first+last@test.org'
    ];
    
    validEmails.forEach(email => {
      const result = checkValidData(email, 'ValidPass123');
      expect(result).toBeNull();
    });
  });

});
